import { Th, Tr, Image as ChakraImage } from "@chakra-ui/react";
import { Fragment } from "react";
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
            </Th>
            <Th color="gray.150">
                <a href={track.uri}>{track.name}</a>
            </Th>
            <Th color="gray.150">{track.artists.map((artist, index) => (
                <Fragment key={artist.id}>
                    {index > 0 && ', '}
                    <a href={artist.uri}>{artist.name}</a>
                </Fragment>
                ))}
            </Th>
            <Th color="gray.150">
                <a href={track.album.uri}>{track.album.name}</a>
            </Th>
        </Tr>
    );
}
