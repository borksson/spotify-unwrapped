import { useEffect, useState } from "react";
import { Artist, getDummyArtist } from "../model/Artist";
import { Table, TableCaption, TableContainer, Th, Thead, Tr, Tbody, Box } from "@chakra-ui/react";
import ArtistTableItem from "../components/ArtistTableItem";

export default function TopArtistsPage() {
    const [artists, setArtists] = useState<Artist[]>([]);

    useEffect(() => {
        //TODO: Replace with API call
        setArtists([
            getDummyArtist(),
            getDummyArtist(),
            getDummyArtist(),
        ]);
    }, []);

    return (
        <Box bg="black" minHeight="100vh" color="gray.300" p={4}>
            <TableContainer border={"1px solid LightGray"} borderRadius={"md"} padding={"5px"} margin={"5px"} bg="blackAlpha.800">
                <Table variant="simple" size="lg">
                    <TableCaption placement="top" fontWeight="bold" fontSize="2xl" color="gray.50">Top Artists</TableCaption>
                    <Thead>
                        <Tr>
                            <Th color="gray.50">Rank</Th>
                            <Th color="gray.50">Artist</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {artists.map((artist, index) => (
                            <ArtistTableItem artist={artist} rank={index + 1} />
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
}
