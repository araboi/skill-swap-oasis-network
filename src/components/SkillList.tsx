
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

type Skill = Database["public"]["Tables"]["skills"]["Row"];

interface SkillListProps {
  mode: "browse" | "manage";
}

const SkillList = ({ mode }: SkillListProps) => {
  const { user } = useAuth();
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkills();
  }, [mode, user]);

  const fetchSkills = async () => {
    try {
      let query = supabase.from("skills").select(`
        *,
        profiles:profiles(username)
      `);

      if (mode === "manage" && user) {
        query = query.eq("user_id", user.id);
      }

      const { data, error } = await query;

      if (error) throw error;
      setSkills(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (skillId: string) => {
    try {
      const { error } = await supabase
        .from("skills")
        .delete()
        .eq("id", skillId);

      if (error) throw error;

      setSkills(skills.filter((skill) => skill.id !== skillId));
      toast({
        title: "Success",
        description: "Skill deleted successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (skills.length === 0) {
    return <div>No skills found.</div>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="rounded-lg border p-4 shadow-sm transition-shadow hover:shadow-md"
        >
          <h3 className="text-lg font-semibold">{skill.skill_name}</h3>
          <p className="text-sm text-muted-foreground">
            Level: {skill.proficiency}
          </p>
          {skill.description && (
            <p className="mt-2 text-sm">{skill.description}</p>
          )}
          {mode === "manage" && (
            <Button
              variant="destructive"
              size="sm"
              className="mt-4"
              onClick={() => handleDelete(skill.id)}
            >
              Delete
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default SkillList;
