import type { Album } from "@/mocks/albums";
import type { Song } from "@/mocks/songs";
import { useAlbum } from "./useAlbum";
import { useSongs } from "./useSongs";

export interface AlbumWithSongs extends Album {
  songs: Song[];
}

export function useAlbumWithSongs(albumId: string) {
  const {
    data: album,
    isFetched,
    isLoading: albumIsLoading,
    isError: albumIsError,
  } = useAlbum(albumId);

  const {
    data,
    isLoading: songsIsLoading,
    isError: songsIsError,
  } = useSongs({ enabled: isFetched });

  const songs = data?.filter((song) => song.albumId === albumId);

  return {
    data: { ...album, songs } as AlbumWithSongs,
    isLoading: albumIsLoading || songsIsLoading,
    isError: albumIsError || songsIsError,
  };
}
