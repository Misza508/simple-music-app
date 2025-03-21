import { cn } from "@/lib/utils";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Disc3, Music2 } from "lucide-react";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="relative">
          <div className="animate-spin-slow mx-auto relative">
            <Disc3 className="w-32 h-32 mx-auto text-primary" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-black" />
            </div>
          </div>

          <Music2 className="absolute top-0 right-1/4 w-6 h-6 text-primary animate-bounce" />
          <Music2 className="absolute bottom-0 left-1/4 w-5 h-5 text-primary animate-bounce delay-300" />
          <Music2 className="absolute top-1/4 left-0 w-4 h-4 text-primary animate-bounce delay-150" />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-medium text-primary">Simple music app</h2>

          <Link to="/albums" className="text-primary underline">
            Go to Albums list{" "}
          </Link>
        </div>

        <div className="flex justify-center items-end h-12 gap-1 pt-4">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-1.5 bg-primary rounded-t",
                i % 3 === 0
                  ? "animate-equalizer-1"
                  : i % 3 === 1
                    ? "animate-equalizer-2"
                    : "animate-equalizer-3"
              )}
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
