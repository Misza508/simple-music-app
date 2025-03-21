import { AlbumList } from "@/components/AlbumList/AlbumList";
import { Error } from "@/components/Error/Error";
import { Loader } from "@/components/Loader/Loader";
import { NotFound } from "@/components/NotFound/NotFound";
import { useAlbums } from "@/hooks/useAlbums";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/albums/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: albums, isError, isLoading } = useAlbums();

  if (isLoading) return <Loader />;
  if (!albums) return <NotFound />;
  if (isError) return <Error />;

  return (
    <div className="container mx-auto py-8 px-4">
      <AlbumList albums={albums} />
    </div>
  );
}
