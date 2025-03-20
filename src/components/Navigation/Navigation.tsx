import { Link } from "@tanstack/react-router";
import { Home, Music } from "lucide-react";
export function Navigation() {
  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Music className="h-6 w-6" />
          <span>Simple music app</span>
        </Link>
        <div className="flex gap-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-1 hover:underline">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/albums"
              className="flex items-center gap-1 hover:underline"
            >
              <Home className="h-4 w-4" />
              <span>Albums</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
