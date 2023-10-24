import React, { useEffect, useState } from 'react';
import { Box, Image, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { LoginUserProfile } from '../model/LoginUserProfile';
import { Profile } from '../model/LoginUserProfile';

export default function UserProfilePage() {
    const [userProfile, setUserProfile] = useState<LoginUserProfile | null>(null);
    const [listeningProfile, setListeningProfile] = useState<Profile | null>(null);

    useEffect(() => {
        // TODO: Fetch user profile and listening profile using API calls
        // For now, we'll use dummy data

        // setUserProfile(dummyUserProfileData);
        // setListeningProfile(dummyListeningProfileData);
    }, []);

    return (
        <Box p={4}>
            <Box mb={6}>
                <Image borderRadius="full" boxSize="150px" src={userProfile?.images[0]?.url} alt={userProfile?.display_name} />
                <Box mt={2}>
                    <Box fontWeight="bold" fontSize="xl">{userProfile?.display_name}</Box>
                    <Box>{userProfile?.email}</Box>
                    <Box>{userProfile?.country}</Box>
                    <Box><a href={userProfile?.external_urls.spotify} target="_blank" rel="noopener noreferrer">Spotify Profile</a></Box>
                </Box>
            </Box>

            <Box>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Attribute</Th>
                            <Th>Value</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {/* Map through the listeningProfile and display each attribute */}
                        {listeningProfile?.map((item, index) => (
                            <Tr key={index}>
                                <Td>{Object.keys(item)[0]}</Td>
                                <Td>{Object.values(item)[0]}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Box>
    );
}
