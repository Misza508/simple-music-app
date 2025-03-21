import { MemoAlbumList } from "@/components/AlbumList/AlbumList";
import { ArtistFilter } from "@/components/ArtistFilter/ArtistFilter";
import { Error } from "@/components/Error/Error";
import { Loader } from "@/components/Loader/Loader";
import { NotFound } from "@/components/NotFound/NotFound";
import { useAlbums } from "@/hooks/useAlbums";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/albums/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: albums, isError, isLoading } = useAlbums();
  const [selectedArtist, setSelectedArtist] = useState<string>("all");

  const artist = useMemo(
    () => ["all", ...new Set(albums?.map((artist) => artist.artist))],
    [albums]
  );

  const filteredAlbums = useMemo(
    () =>
      selectedArtist === "all"
        ? albums
        : albums?.filter((artist) => artist.artist === selectedArtist),
    [selectedArtist, albums]
  );

  if (isLoading) return <Loader />;
  if (!albums || !filteredAlbums) return <NotFound />;
  if (isError) return <Error />;

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Albums:</h2>
          <div className="w-48">
            <ArtistFilter
              onChange={setSelectedArtist}
              option={artist}
              value={selectedArtist}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MemoAlbumList filteredAlbums={filteredAlbums} />
      </div>
    </div>
  );
}
