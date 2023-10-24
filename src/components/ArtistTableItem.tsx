import { Th, Tr } from "@chakra-ui/react";
import { Artist } from "../model/Artist";

interface ArtistTableItemProps {
    artist: Artist;
    rank: number;
}

export default function ArtistTableItem({ artist, rank }: ArtistTableItemProps) {
    return (
        <Tr key={artist.id} _hover={{ bg: "green.100" }}>
            <Th>{rank}</Th>
            <Th>{artist.name}</Th>
        </Tr>
    )
}
