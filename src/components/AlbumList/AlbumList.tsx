"use client";

import { Link } from "@tanstack/react-router";
import { useState } from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Album } from "@/mocks/albums";

export function AlbumList({ albums }: { albums: Album[] }) {
  const [selectedArtist, setSelectedArtist] = useState<string>("all");

  const artist = ["all", ...new Set(albums.map((artist) => artist.artist))];

  const filteredAlbums =
    selectedArtist === "all"
      ? albums
      : albums.filter((artist) => artist.artist === selectedArtist);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Albums:</h2>
        <div className="w-48">
          <Select value={selectedArtist} onValueChange={setSelectedArtist}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by genre" />
            </SelectTrigger>
            <SelectContent>
              {artist.map((genre) => (
                <SelectItem key={genre} value={genre}>
                  {genre.charAt(0).toUpperCase() + genre.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAlbums.map((album) => (
          <Link key={album.id} to={`/albums/$id`} params={{ id: album.id }}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img
                  src={album.cover || "/placeholder.svg"}
                  alt={album.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </CardContent>
              <CardFooter className="flex flex-col items-start p-4">
                <h3 className="text-xl font-semibold">{album.title}</h3>
                <p className="text-muted-foreground">{album.artist}</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
