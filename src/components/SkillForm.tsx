
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const SkillForm = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [skill, setSkill] = useState({
    skill_name: "",
    proficiency: "beginner",
    description: "",
    willing_to_teach: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from("skills")
        .insert([{ ...skill, user_id: user.id }]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your skill has been added.",
      });

      setSkill({
        skill_name: "",
        proficiency: "beginner",
        description: "",
        willing_to_teach: true,
      });
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

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="skill_name">Skill Name</Label>
        <Input
          id="skill_name"
          value={skill.skill_name}
          onChange={(e) => setSkill({ ...skill, skill_name: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="proficiency">Proficiency Level</Label>
        <Select
          value={skill.proficiency}
          onValueChange={(value) => setSkill({ ...skill, proficiency: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select proficiency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
            <SelectItem value="expert">Expert</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={skill.description}
          onChange={(e) => setSkill({ ...skill, description: e.target.value })}
          placeholder="Describe your experience with this skill..."
        />
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Skill"}
      </Button>
    </form>
  );
};

export default SkillForm;
