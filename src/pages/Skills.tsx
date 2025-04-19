
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SkillForm from "@/components/SkillForm";
import SkillList from "@/components/SkillList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/useAuth";

const Skills = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Skills Exchange</h1>
      
      <Tabs defaultValue="browse" className="space-y-4">
        <TabsList>
          <TabsTrigger value="browse">Browse Skills</TabsTrigger>
          <TabsTrigger value="manage">Manage My Skills</TabsTrigger>
        </TabsList>
        
        <TabsContent value="browse">
          <Card>
            <CardHeader>
              <CardTitle>Available Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <SkillList mode="browse" />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="manage">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Add New Skill</CardTitle>
              </CardHeader>
              <CardContent>
                <SkillForm />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>My Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <SkillList mode="manage" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Skills;
