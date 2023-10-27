import { Th, Tr, Image as ChakraImage } from "@chakra-ui/react";
import { Track } from "../model/Track";

interface TrackTableItemProps {
    track: Track;
    rank: number;
}

export default function TrackTableItem({ track, rank }: TrackTableItemProps) {
    return (
        <Tr key={track.id} _hover={{ bg: "green.100", color: "black",  }}>
            <Th color="gray.150"> {rank}</Th>
            <Th color="gray.150">
                <ChakraImage boxSize="50px" src={track.album.images[0]?.url} alt={track.name} mr={2} />
                {track.name}
            </Th>
            <Th color="gray.150">{track.artists.map((artist) => artist.name).join(", ")}</Th>
            <Th color="gray.150">{track.album.name}</Th>
        </Tr>
    );
}
