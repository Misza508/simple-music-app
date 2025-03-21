import { db } from "@/lib/db";
import { albums } from "@/mocks/albums";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import { useAlbums } from "../useAlbums";

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

test("should return all albums ", async () => {
  const album = albums.slice(0, 3);
  vi.spyOn(db, "getAlbum").mockResolvedValue(album);
  await waitFor(() => {
    const { result } = renderHook(() => useAlbums(), { wrapper });
    expect(result.current.data?.length).toBe(album.length);
    expect(result.current.data).toEqual(album);
  });
});
