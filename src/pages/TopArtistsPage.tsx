import { useEffect, useState } from "react";
import { Artist } from "../model/Artist";
import { Table, TableCaption, TableContainer, Th, Thead, Tr, Tbody, Box } from "@chakra-ui/react";
import ArtistTableItem from "../components/ArtistTableItem";
import { TimeFrame, getTopArtists } from "../api/SpotifyFacade";

export default function TopArtistsPage() {
    const [artists, setArtists] = useState<Artist[]>([]);

    useEffect(() => {
        getTopArtists(sessionStorage.getItem("token")!, 5, TimeFrame.long_term).then((artists) => {
            setArtists(artists);
        })
    }, [])
    return (
        <TableContainer border={"1px solid LightGray"} borderRadius={"md"} padding={"5px"} margin={"5px"}>
            <Table variant="simple" colorScheme="green" size="md" mt={4}>
                <TableCaption placement="top" fontWeight="bold" fontSize="xl">Top Artists</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Rank</Th>
                        <Th>Artist</Th>
                    </Tr>
                </Thead>
                {artists.map((artist, index) => ArtistTableItem(artist, index + 1))}
            </Table>

        </TableContainer>
    )
}
