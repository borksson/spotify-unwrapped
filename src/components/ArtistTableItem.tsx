import { Th, Tr, Image as ChakraImage } from "@chakra-ui/react";
import { Artist } from "../model/Artist";

interface ArtistTableItemProps {
    artist: Artist;
    rank: number;
}

export default function ArtistTableItem({ artist, rank }: ArtistTableItemProps) {
    return (
        <Tr key={artist.id} _hover={{ bg: "green.100", color: "black" }}>
            <Th color="gray.150">{rank}</Th>
            <Th color="gray.150">
                <a href={artist.uri}>
                    <ChakraImage boxSize="50px" src={artist.images?.[0]?.url} alt={artist.name} mr={2} />
                </a>
            </Th>
            <Th color="gray.150">
                <a href={artist.uri}>{artist.name}</a>
            </Th>
        </Tr>
    )
}
