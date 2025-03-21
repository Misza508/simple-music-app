import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { AlbumWithSongs } from "@/hooks/useAlbumWithSongs";

import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export default function Album({ artist, cover, songs, title }: AlbumWithSongs) {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-row gap-4 mb-4">
        <Link
          to="/"
          className="flex items-center gap-2 mb-6 text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Home page
        </Link>
        <Link
          to="/albums"
          className="flex items-center gap-2 mb-6 text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Albums
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <img
          src={cover}
          alt={title}
          width={300}
          height={300}
          className="rounded-lg object-cover w-full md:w-64 h-64"
        />
      </div>

      <Tabs defaultValue="albums" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="albums">Album</TabsTrigger>
          <TabsTrigger value="songs">Songs</TabsTrigger>
        </TabsList>

        <TabsContent value="albums" className="space-y-6">
          <span className="flex flex-row items-center gap-4">
            <p className="text-foreground">Title:</p>
            <h2 className="text-2xl font-semibold mb-4 text-2xl font-semibold mb-4 ">
              {title}
            </h2>
          </span>
          <span className="flex flex-row items-center gap-4">
            <p className="text-foreground">Artist: </p>
            <h2 className="text-2xl font-semibold mb-4 text-2xl font-semibold mb-4">
              {artist}
            </h2>
          </span>
        </TabsContent>

        <TabsContent value="songs" className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Songs</h2>
          <div className="space-y-2">
            {songs?.map((song, index) => (
              <div
                key={song.id}
                className="flex items-center p-3 hover:bg-muted transition-colors border-b last:border-b-0"
              >
                <div className="w-8 text-center text-muted-foreground">
                  {index + 1}
                </div>
                <div className="flex-1 ml-2">
                  <div className="font-medium">{song.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {song.genre}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
