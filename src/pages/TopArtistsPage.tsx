import { useEffect, useState } from "react";
import { Artist } from "../model/Artist";
import { Table, TableCaption, TableContainer, Th, Thead, Tr, Tbody, Box } from "@chakra-ui/react";
import ArtistTableItem from "../components/ArtistTableItem";
import { TimeFrame, getTopArtists } from "../api/SpotifyFacade";
import TimeFrameDropdown from "../components/TimeFrameDropdown";

export default function TopArtistsPage() {
    const [artists, setArtists] = useState<Artist[]>([]);
    const [timeFrame, setTimeFrame] = useState<TimeFrame>(TimeFrame.long_term); // Default time frame

    const handleTimeFrameChange = (event: any) => {
        setTimeFrame(event.target.value);
    };

    useEffect(() => {
        getTopArtists(sessionStorage.getItem("token")!, 5, timeFrame).then((artists) => {
            setArtists(artists);
        });
    }, [timeFrame]);

    return (
        <Box bg="black" minHeight="100vh" color="gray.300" p={4}>
            <TimeFrameDropdown value={timeFrame} onChange={handleTimeFrameChange} />
            <TableContainer border={"1px solid LightGray"} borderRadius={"md"} padding={"5px"} margin={"5px"} bg="blackAlpha.800">
                <Table variant="simple" size="lg">
                    <TableCaption placement="top" fontWeight="bold" fontSize="2xl" color="gray.50">Top Artists</TableCaption>
                    <Thead>
                        <Tr>
                            <Th color="gray.50">Rank</Th>
                            <Th color="gray.50"></Th>
                            <Th color="gray.50">Artist</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {artists.map((artist, index) => <ArtistTableItem artist={artist} rank={index + 1} key={artist.id} />)}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
}
