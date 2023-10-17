import { useEffect, useState } from "react";
import { Artist, getDummyArtist } from "../model/Artist";
import { Table, TableCaption, TableContainer, Th, Thead, Tr } from "@chakra-ui/react";
import ArtistTableItem from "../components/ArtistTableItem";

export default function TopTracksPage() {
    const [artists, setArtists] = useState<Artist[]>([])
    
    useEffect(() => {
        //TODO: Replace with API call
        setArtists([
            getDummyArtist(),
            getDummyArtist(),
            getDummyArtist(),
        ])
    }, [])
    return (
        <TableContainer border={"1px solid LightGray"} borderRadius={"md"} padding={"5px"} margin={"5px"}>
            <Table variant="simple" colorScheme="green">
                <TableCaption placement="top">Top Artists</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Rank</Th>
                        <Th>Artist</Th>
                    </Tr>
                </Thead>
                {artists.map((artist, index) => ArtistTableItem(artist, index+1))}
            </Table>
        </TableContainer>
    )
}