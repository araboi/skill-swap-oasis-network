
import { MessageSquare, Search, Users } from "lucide-react";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  const features = [
    {
      title: "Find Perfect Matches",
      description: "Discover people with complementary skills and interests",
      Icon: Search
    },
    {
      title: "Connect & Learn",
      description: "Exchange skills through our secure messaging platform",
      Icon: MessageSquare
    },
    {
      title: "Join Community",
      description: "Be part of a growing network of skill enthusiasts",
      Icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <Hero />
        <div className="py-16">
          <h2 className="mb-12 text-center text-3xl font-bold">
            How It Works
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
