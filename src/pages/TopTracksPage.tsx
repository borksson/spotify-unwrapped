import { useEffect, useState } from "react";
import { Track, getDummyTrack } from "../model/Track";
import { Table, TableCaption, TableContainer, Th, Thead, Tr } from "@chakra-ui/react";
import TrackTableItem from "../components/TrackTableItem";

export default function TopTracksPage() {
    const [tracks, setTracks] = useState<Track[]>([])
    
    useEffect(() => {
        //TODO: Replace with API call
        setTracks([
            getDummyTrack(),
            getDummyTrack(),
            getDummyTrack(),
        ])
    }, [])
    return (
        <TableContainer border={"1px solid LightGray"} borderRadius={"md"} boxShadow={"md"} padding={"5px"} margin={"5px"}>
            <Table variant="simple">
                <TableCaption>Top Tracks</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Rank</Th>
                        <Th>Track</Th>
                        <Th>Artist</Th>
                        <Th>Album</Th>
                    </Tr>
                </Thead>
                {tracks.map((track, index) => TrackTableItem(track, index+1))}
            </Table>
        </TableContainer>
    )
}