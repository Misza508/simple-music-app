import { db } from "@/lib/db";
import { albums } from "@/mocks/albums";
import { songs } from "@/mocks/songs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import { useAlbumWithSongs } from "../useAlbumWithSongs";

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

test("should return album with songs", async () => {
  const albumId = "a1b2c3d4";
  const album = albums.filter((album) => album.id === albumId);
  const filteredSongs = songs.filter((song) => song.albumId === albumId);

  vi.spyOn(db, "getAlbum").mockResolvedValue(album);
  vi.spyOn(db, "getSong").mockResolvedValue(filteredSongs);

  await waitFor(() => {
    const { result } = renderHook(() => useAlbumWithSongs("a1b2c3d4"), {
      wrapper,
    });
    expect(result.current.data?.id).toBe(albumId);
    expect(result.current.data?.songs).toEqual(filteredSongs);
  });
});
