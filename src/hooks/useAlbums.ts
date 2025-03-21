import { db } from "@/lib/db";
import { useQuery } from "@tanstack/react-query";

export function useAlbums() {
  return useQuery({
    queryKey: ["albums"],
    queryFn: () => db.getAlbum(),
  });
}
