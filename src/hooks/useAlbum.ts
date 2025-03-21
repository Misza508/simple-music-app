import { db } from "@/lib/db";
import { useQuery } from "@tanstack/react-query";

export function useAlbum(id: string) {
  return useQuery({
    queryKey: ["albums", id],
    queryFn: () => db.getAlbum({ id }),
    select(data) {
      return data[0];
    },
  });
}
