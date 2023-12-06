import React, { useEffect, useState } from 'react';
import { Box, Image, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Tooltip, Icon, Text, Button } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import { LoginUserProfile } from '../model/LoginUserProfile';
import { UserProfile, getDummyUserProfile } from '../model/UserProfile';
import { getUserProfile } from '../api/SpotifyFacade';
import { getLoginUserProfile } from '../api/SpotifyFacade';

export default function UserProfilePage() {
    const [loginUserProfile, setLoginUserProfile] = useState<LoginUserProfile | null>(null);
    const [userProfileStats, setUserProfileStats] = useState<UserProfile | null>(null);

    useEffect(() => {
        getLoginUserProfile(sessionStorage.getItem("token")!).then((loginUserProfile) => {
            setLoginUserProfile(loginUserProfile)
        })

        getUserProfile(sessionStorage.getItem("token")!).then((userProfileStats) => {
            setUserProfileStats(userProfileStats)
        })
    }, []);

    return (
        <Box bg="black" minHeight="100vh" color="gray.300" p={4}>
            <Box mb={6} display="flex" justifyContent="left">
                <Image borderRadius="full" boxSize="150px" src={loginUserProfile?.images[0]?.url} alt={loginUserProfile?.display_name} />
                <Box mt={4} ml={10} >
                    <Text fontWeight="bold" fontSize="3xl" color="gray.50">{loginUserProfile?.display_name}</Text>
                    <Text fontSize="xl" color="gray.400">{loginUserProfile?.email}</Text>
                    <Text fontSize="lg" color="gray.500">{loginUserProfile?.country}</Text>
                    <Box mt={2}>
                        <a href={loginUserProfile?.external_urls.spotify} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: '#1DB954' }}>Spotify Profile</a>
                    </Box>
                </Box>
            </Box>

            <Button colorScheme='green' onClick={() => window.location.href = '/gen-image'}>Share Profile</Button>

            <TableContainer border={"1px solid #1DB954"} borderRadius={"md"} padding={"5px"} margin={"5px"} bg="blackAlpha.800">
                <Table variant="simple" size="lg">
                    <Thead>
                        <Tr>
                            <Th color="gray.50">Attribute</Th>
                            <Th color="gray.50">Value</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                Acousticness 
                                <Tooltip label="A measure of how acoustic the tracks are." color="black" bgColor="gray.300">
                                    <Icon as={InfoIcon} ml={2} w={4} h={4} color="gray.500" />
                                </Tooltip>
                            </Td>
                            <Td color="gray.200">{userProfileStats?.acousticness}</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Danceability
                                <Tooltip label="A measure of how danceable the tracks are.">
                                    <Icon as={InfoIcon} ml={2} w={4} h={4} color="gray.500" />
                                </Tooltip>
                            </Td>
                            <Td color="gray.200">{userProfileStats?.danceability}</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Duration (ms)
                                <Tooltip label="The average duration of tracks in milliseconds.">
                                    <Icon as={InfoIcon} ml={2} w={4} h={4} color="gray.500" />
                                </Tooltip>
                            </Td>
                            <Td color="gray.200">{userProfileStats?.duration_ms}</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Energy
                                <Tooltip label="A measure of the intensity and activity of tracks.">
                                    <Icon as={InfoIcon} ml={2} w={4} h={4} color="gray.500" />
                                </Tooltip>
                            </Td>
                            <Td color="gray.200">{userProfileStats?.energy}</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Instrumentalness
                                <Tooltip label="A measure of how instrumental the tracks are.">
                                    <Icon as={InfoIcon} ml={2} w={4} h={4} color="gray.500" />
                                </Tooltip>
                            </Td>
                            <Td color="gray.200">{userProfileStats?.instrumentalness}</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Key
                                <Tooltip label="The key the track is in.">
                                    <Icon as={InfoIcon} ml={2} w={4} h={4} color="gray.500" />
                                </Tooltip>
                            </Td>
                            <Td color="gray.200">{userProfileStats?.key}</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Liveness
                                <Tooltip label="A measure of the presence of a live audience in the recording.">
                                    <Icon as={InfoIcon} ml={2} w={4} h={4} color="gray.500" />
                                </Tooltip>
                            </Td>
                            <Td color="gray.200">{userProfileStats?.liveness}</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Loudness
                                <Tooltip label="Overall loudness of the track in decibels.">
                                    <Icon as={InfoIcon} ml={2} w={4} h={4} color="gray.500" />
                                </Tooltip>
                            </Td>
                            <Td color="gray.200">{userProfileStats?.loudness}</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Mode
                                <Tooltip label="Modality of the track.">
                                    <Icon as={InfoIcon} ml={2} w={4} h={4} color="gray.500" />
                                </Tooltip>
                            </Td>
                            <Td color="gray.200">{userProfileStats?.mode}</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Speechiness
                                <Tooltip label="A measure of the presence of spoken words in the track.">
                                    <Icon as={InfoIcon} ml={2} w={4} h={4} color="gray.500" />
                                </Tooltip>
                            </Td>
                            <Td color="gray.200">{userProfileStats?.speechiness}</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Tempo
                                <Tooltip label="The overall estimated tempo of the track in beats per minute.">
                                    <Icon as={InfoIcon} ml={2} w={4} h={4} color="gray.500" />
                                </Tooltip>
                            </Td>
                            <Td color="gray.200">{userProfileStats?.tempo}</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Time Signature
                                <Tooltip label="An estimated overall time signature of the track.">
                                    <Icon as={InfoIcon} ml={2} w={4} h={4} color="gray.500" />
                                </Tooltip>
                            </Td>
                            <Td color="gray.200">{userProfileStats?.time_signature}</Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Valence
                                <Tooltip label="A measure of the musical positiveness of the track.">
                                    <Icon as={InfoIcon} ml={2} w={4} h={4} color="gray.500" />
                                </Tooltip>
                            </Td>
                            <Td color="gray.200">{userProfileStats?.valence}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
}

