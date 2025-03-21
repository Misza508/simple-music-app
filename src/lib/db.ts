import { albums, type Album } from "@/mocks/albums";
import { songs, type Song } from "@/mocks/songs";

interface QueryParam {
  id: string;
}

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const db = {
  getAlbum: async (params?: QueryParam): Promise<Album[]> => {
    const { id } = params || { id: "" };
    await new Promise((resolve) => setTimeout(resolve, getRandomInt(400, 600)));
    if (id) {
      return new Promise(async (resolve) =>
        resolve(albums.filter((album) => album.id === id))
      );
    }
    return new Promise((resolve) => resolve(albums));
  },
  getSong: async (params?: QueryParam): Promise<Song[]> => {
    const { id } = params || { id: "" };
    await new Promise((resolve) => setTimeout(resolve, getRandomInt(400, 600)));
    if (id) {
      return new Promise((resolve) =>
        resolve(songs.filter((song) => song.id === id))
      );
    }
    return new Promise((resolve) => resolve(songs));
  },
};
