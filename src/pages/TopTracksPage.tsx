import { useEffect, useState } from "react";
import { Track } from "../model/Track";
import { Table, TableCaption, TableContainer, Th, Thead, Tr } from "@chakra-ui/react";
import TrackTableItem from "../components/TrackTableItem";
import { TimeFrame, getTopTracks } from "../api/SpotifyFacade";

export default function TopTracksPage() {
    const [tracks, setTracks] = useState<Track[]>([])

    useEffect(() => {
        //TODO: Replace with API call
        getTopTracks(sessionStorage.getItem("token")!, 5, TimeFrame.long_term).then((tracks) => {
            setTracks(tracks);
        })
    }, [])

    return (
        <TableContainer border={"1px solid LightGray"} borderRadius={"md"} padding={"5px"} margin={"5px"}>
            <Table variant="simple" colorScheme="green" size="md" mt={4}>
                <TableCaption placement="top" fontWeight="bold" fontSize="xl">Top Tracks</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Rank</Th>
                        <Th>Track</Th>
                        <Th>Artist</Th>
                        <Th>Album</Th>
                    </Tr>
                </Thead>
                {tracks.map((track, index) => TrackTableItem(track, index + 1))}
            </Table>

        </TableContainer>
    )
}