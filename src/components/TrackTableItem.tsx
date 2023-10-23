import { Th, Tr } from "@chakra-ui/react";
import { Track } from "../model/Track";

export default function TrackTableItem(track: Track, rank: number) {
    return (
        <Tr key={track.id}>
            <Th>{rank}</Th>
            <Th>{track.name}</Th>
            <Th>{track.artists.map((artist) => artist.name).join(", ")}</Th>
            <Th>{track.album.name}</Th>
        </Tr>
    )
}