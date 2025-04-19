
import { MessageSquare, Search, Users, BookOpen, Star, Heart } from "lucide-react";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";

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
        
        {/* Features Section */}
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

        {/* Community Showcase Section */}
        <div className="bg-purple-50 py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">
              Real Stories, Real Growth
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Star className="mx-auto mb-4 text-purple-600" size={48} />
                <h3 className="text-xl font-semibold mb-4">500+ Active Swappers</h3>
                <p className="text-muted-foreground">
                  Join a vibrant community of lifelong learners
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Heart className="mx-auto mb-4 text-purple-600" size={48} />
                <h3 className="text-xl font-semibold mb-4">50+ Skill Categories</h3>
                <p className="text-muted-foreground">
                  From coding to cooking, find your perfect skill match
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <BookOpen className="mx-auto mb-4 text-purple-600" size={48} />
                <h3 className="text-xl font-semibold mb-4">Free Forever</h3>
                <p className="text-muted-foreground">
                  No hidden costs, just pure knowledge exchange
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
            Whether you want to learn a new skill or share your expertise, 
            Skill Swap Oasis is your gateway to endless learning opportunities.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Users />
              Join Now
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <BookOpen />
              Explore Skills
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
