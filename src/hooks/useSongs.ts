import { db } from "@/lib/db";
import { useQuery } from "@tanstack/react-query";

export function useSongs({ enabled }: { enabled: boolean }) {
  return useQuery({
    queryKey: ["songs"],
    queryFn: () => db.getSong(),
    enabled,
  });
}
