import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ArtistFilter({
  value,
  option,
  onChange,
}: {
  value: string;
  option: string[];
  onChange: (value: string) => void;
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="Filter by artist" />
      </SelectTrigger>
      <SelectContent>
        {option.map((artist) => (
          <SelectItem key={artist} value={artist}>
            {artist.charAt(0).toUpperCase() + artist.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
