
import { Button } from "@/components/ui/button";
import { BookOpen, Users } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 text-center lg:py-32">
      <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
        Share Your Skills,{" "}
        <span className="text-purple-600">Grow Together</span>
      </h1>
      <p className="mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
        Join our community where knowledge flows freely. Teach what you know,
        learn what you love. The future of skill sharing is here.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button size="lg" className="gap-2">
          <Users />
          Join Community
        </Button>
        <Button size="lg" variant="outline" className="gap-2">
          <BookOpen />
          Explore Skills
        </Button>
      </div>
    </div>
  );
};

export default Hero;
