import Album from "@/components/Album/Album";
import { Error } from "@/components/Error/Error";
import { Loader } from "@/components/Loader/Loader";
import { NotFound } from "@/components/NotFound/NotFound";
import { useAlbumWithSongs } from "@/hooks/useAlbumWithSongs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/albums/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  const { data: album, isError, isLoading } = useAlbumWithSongs(id);

  if (isError) return <Error />;
  if (!album) return <NotFound />;
  if (isLoading) return <Loader />;

  return (
    <Album
      artist={album.artist}
      cover={album.cover}
      id={album.id}
      title={album.title}
      songs={album.songs}
    />
  );
}
