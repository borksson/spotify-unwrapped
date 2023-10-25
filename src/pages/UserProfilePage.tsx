import React, { useEffect, useState } from 'react';
import { Box, Image, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { LoginUserProfile } from '../model/LoginUserProfile';
import { Profile } from '../model/LoginUserProfile';
import {UserProfile, getDummyUserProfile} from '../model/UserProfile'

export default function UserProfilePage() {
    const [userProfile, setUserProfile] = useState<LoginUserProfile | null>(null);
    const [listeningProfile, setListeningProfile] = useState<Profile | null>(null);
    const [userProfileStats, setUserProfileStats] = useState<UserProfile | null>(null);

    useEffect(() => {
        // TODO: Fetch user profile and listening profile using API calls
        // For now, we'll use dummy data

        setUserProfileStats(
            getDummyUserProfile()
        )
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

            <TableContainer border={"1px solid LightGray"} borderRadius={"md"} padding={"5px"} margin={"5px"}>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Attribute</Th>
                            <Th>Value</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Acousticness</Td>
                            <Td>{userProfileStats?.acousticness}</Td>
                        </Tr>
                        <Tr>
                            <Td>Danceability</Td>
                            <Td>{userProfileStats?.danceability}</Td>
                        </Tr>
                        <Tr>
                            <Td>Duration (ms)</Td>
                            <Td>{userProfileStats?.duration_ms}</Td>
                        </Tr>
                        <Tr>
                            <Td>Energy</Td>
                            <Td>{userProfileStats?.energy}</Td>
                        </Tr>
                        <Tr>
                            <Td>Instrumentalness</Td>
                            <Td>{userProfileStats?.instrumentalness}</Td>
                        </Tr>
                        <Tr>
                            <Td>Key</Td>
                            <Td>{userProfileStats?.key}</Td>
                        </Tr>
                        <Tr>
                            <Td>Liveness</Td>
                            <Td>{userProfileStats?.liveness}</Td>
                        </Tr>
                        <Tr>
                            <Td>Loudness</Td>
                            <Td>{userProfileStats?.loudness}</Td>
                        </Tr>
                        <Tr>
                            <Td>Mode</Td>
                            <Td>{userProfileStats?.mode}</Td>
                        </Tr>
                        <Tr>
                            <Td>Speechiness</Td>
                            <Td>{userProfileStats?.speechiness}</Td>
                        </Tr>
                        <Tr>
                            <Td>Tempo</Td>
                            <Td>{userProfileStats?.tempo}</Td>
                        </Tr>
                        <Tr>
                            <Td>Time Signature</Td>
                            <Td>{userProfileStats?.time_signature}</Td>
                        </Tr>
                        <Tr>
                            <Td>Valence</Td>
                            <Td>{userProfileStats?.valence}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
}
