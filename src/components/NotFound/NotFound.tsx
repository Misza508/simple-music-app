import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Disc3, Home, Music2 } from "lucide-react";
import { useEffect, useState } from "react";

export function NotFound() {
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    setIsSpinning(true);

    return () => {
      setIsSpinning(false);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="relative">
          <div
            className={cn(
              "mx-auto relative transition-transform duration-5000 ease-linear",
              isSpinning && "animate-spin-slow"
            )}
          >
            <Disc3 className="w-48 h-48 mx-auto text-primary" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-black" />
            </div>
          </div>

          <Music2 className="absolute top-0 right-1/4 w-8 h-8 text-primary-foreground animate-bounce" />
          <Music2 className="absolute bottom-0 left-1/4 w-6 h-6 text-primary-foreground animate-bounce delay-100" />
        </div>

        <div className="space-y-4">
          <h1 className="text-6xl font-bold tracking-tighter">404</h1>
          <h2 className="text-2xl font-medium">Looks like the track skipped</h2>
          <p className="text-muted-foreground">
            We couldn't find the page you were looking for. The beat might have
            dropped too hard.
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
