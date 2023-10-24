import { Th, Tr } from "@chakra-ui/react";
import { Artist } from "../model/Artist";

export default function ArtistTableItem(artist: Artist, rank: number) {
    return (
        <Tr key={artist.id} _hover={{ bg: "green.100" }}>
            <Th>{rank}</Th>
            <Th>{artist.name}</Th>
        </Tr>
    )
}