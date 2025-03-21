import { Link } from "@tanstack/react-router";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { isEqual } from "@/lib/isEqual";
import type { Album } from "@/mocks/albums";
import React from "react";

function AlbumList({ filteredAlbums }: { filteredAlbums: Album[] }) {
  return filteredAlbums.map((album) => (
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
  ));
}

export const MemoAlbumList = React.memo(AlbumList, (prevProps, nextProp) => {
  return isEqual(prevProps.filteredAlbums, nextProp.filteredAlbums);
});
