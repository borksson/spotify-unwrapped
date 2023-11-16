import { useEffect, useState } from "react";
import { Track } from "../model/Track";
import { Table, TableCaption, TableContainer, Th, Thead, Tr, Tbody, Box } from "@chakra-ui/react";
import TrackTableItem from "../components/TrackTableItem";
import { TimeFrame, getTopTracks } from "../api/SpotifyFacade";
import TimeFrameDropdown from "../components/TimeFrameDropdown";

export default function TopTracksPage() {
    const [tracks, setTracks] = useState<Track[]>([]);
    const [timeFrame, setTimeFrame] = useState<TimeFrame>(TimeFrame.long_term); // Default time frame

    const handleTimeFrameChange = (event) => {
        setTimeFrame(event.target.value);
    };

    useEffect(() => {
        getTopTracks(sessionStorage.getItem("token")!, 5, timeFrame).then((tracks) => {
            setTracks(tracks);
        });
    }, [timeFrame]);

    return (
        <Box bg="black" minHeight="100vh" color="gray.300" p={4}>
            <TimeFrameDropdown value={timeFrame} onChange={handleTimeFrameChange} />
            <TableContainer border={"1px solid LightGray"} borderRadius={"md"} padding={"5px"} margin={"5px"} bg="blackAlpha.800">
                <Table variant="simple" size="lg">
                    <TableCaption placement="top" fontWeight="bold" fontSize="2xl" color="gray.50">Top Tracks</TableCaption>
                    <Thead>
                        <Tr>
                            <Th color="gray.50">Rank</Th>
                            <Th color="gray.50"></Th>
                            <Th color="gray.50">Track</Th>
                            <Th color="gray.50">Artist</Th>
                            <Th color="gray.50">Album</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {tracks.map((track, index) => (
                            <TrackTableItem track={track} rank={index + 1} />
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
}
