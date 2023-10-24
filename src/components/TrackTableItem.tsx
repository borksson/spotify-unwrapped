import { Th, Tr, Image as ChakraImage } from "@chakra-ui/react";
import { Track } from "../model/Track";

export default function TrackTableItem(track: Track, rank: number) {
    return (
        <Tr key={track.id} _hover={{ bg: "green.100" }}>
            <Th>{rank}</Th>
            <Th>
                <ChakraImage boxSize="50px" src={track.album.images[0]?.url} alt={track.name} mr={2} />
                {track.name}
            </Th>
            <Th>{track.artists.map((artist) => artist.name).join(", ")}</Th>
            <Th>{track.album.name}</Th>
        </Tr>
    )
}