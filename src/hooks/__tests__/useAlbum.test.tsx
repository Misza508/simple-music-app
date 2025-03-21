import { db } from "@/lib/db";
import { albums } from "@/mocks/albums";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import { useAlbum } from "../useAlbum";

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

test("should return album with given id", async () => {
  const albumId = "a1b2c3d4";
  const album = albums.filter((album) => album.id === albumId);
  vi.spyOn(db, "getAlbum").mockResolvedValue(album);
  await waitFor(() => {
    const { result } = renderHook(() => useAlbum("a1b2c3d4"), { wrapper });
    expect(result.current.data?.id).toBe(albumId);
  });
});
