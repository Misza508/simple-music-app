export const albums: Album[] = [
  {
    id: "a1b2c3d4",
    cover: "/cover1.jpeg",
    title: "Echoes of Dawn",
    artist: "The Sunset Riders",
  },
  {
    id: "e5f6g7h8",
    cover: "/cover2.jpeg",
    title: "Midnight Serenade",
    artist: "Electric Shadows",
  },
  {
    id: "i9j0k1l2",
    cover: "/cover3.jpeg",
    title: "Crimson Skies",
    artist: "Silent Waves",
  },
  {
    id: "m3n4o5p6",
    cover: "/cover4.jpeg",
    title: "Urban Rhythms",
    artist: "Cosmic Drifters",
  },
  {
    id: "q7r8s9t0",
    cover: "/cover5.jpeg",
    title: "Retro Reverie",
    artist: "Midnight Bloom",
  },
  {
    id: "u1v2w3x4",
    cover: "/cover1.jpeg",
    title: "Golden Hour Ballads",
    artist: "The Stargazers",
  },
  {
    id: "y5z6a7b8",
    cover: "/cover2.jpeg",
    title: "Lost in the City",
    artist: "Neon Rebels",
  },
  {
    id: "c9d0e1f2",
    cover: "/cover3.jpeg",
    title: "Whispers of the Night",
    artist: "Crimson Echo",
  },
  {
    id: "g3h4i5j6",
    cover: "/cover4.jpeg",
    title: "Electric Dreams",
    artist: "Urban Legends",
  },
  {
    id: "k7l8m9n0",
    cover: "/cover5.jpeg",
    title: "Starlight Symphony",
    artist: "Retro Rhythms",
  },
];

export interface Album {
  id: string;
  cover: string;
  title: string;
  artist: string;
}
