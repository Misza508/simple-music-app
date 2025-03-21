import { Button } from "@/components/ui/button";
import { Disc3, Home, Music2 } from "lucide-react";

export function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="relative">
          <div className="mx-auto relative transition-transform duration-5000 ease-linear animate-spin-slow">
            <Disc3 className="w-48 h-48 mx-auto text-primary" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-black" />
            </div>
          </div>

          <Music2 className="absolute top-0 right-1/4 w-8 h-8 text-primary animate-bounce" />
          <Music2 className="absolute bottom-0 left-1/4 w-6 h-6 text-primary animate-bounce delay-100" />
        </div>

        <div className="space-y-4">
          <h1 className="text-6xl text-primary font-bold tracking-tighter">
            500
          </h1>
          <h2 className="text-2xl text-primary font-medium">
            {" "}
            Something went truly bad
          </h2>
          <p className="text-muted-foreground">
            We are working on a fix for this. We may have lost a bass player
          </p>
        </div>

        <div className="pt-6">
          <Button asChild size="lg" className="gap-2">
            <a href="/">
              <Home className="w-4 h-4" />
              Back to the main track
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
