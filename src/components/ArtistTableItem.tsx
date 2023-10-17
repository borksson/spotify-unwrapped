import { Th, Tr } from "@chakra-ui/react";
import { Artist } from "../model/Artist";

export default function ArtistTableItem(artist: Artist, rank: number) {
    return (
        <Tr key={artist.id}>
            <Th>{rank}</Th>
            <Th>{artist.name}</Th>
        </Tr>
    )
}