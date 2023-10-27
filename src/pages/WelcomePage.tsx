import { Box, Button, Heading, VStack, Text, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
    return (
        <Box 
            textAlign="center"
            bgColor="#121212" 
            color="white" 
            height="100vh" 
            backgroundImage="url('https://path-to-your-music-related-background.jpg')" 
            backgroundSize="cover"
            backgroundPosition="center"
        >
            <Center flexDirection="column" height="100vh">
                <Heading mb={6}>Welcome to Spotify Unwrapped!</Heading>
                <Text fontSize="xl" mb={6} fontStyle="italic">"Your music, your personality"</Text>
                <VStack spacing={4}>
                    <Link to="/top-artists">
                        <Button colorScheme="green">Top Artists</Button>
                    </Link>
                    <Link to="/top-tracks">
                        <Button colorScheme="green">Top Tracks</Button>
                    </Link>
                    <Link to="/user-profile">
                        <Button colorScheme="green">User Profile</Button>
                    </Link>
                </VStack>
            </Center>
        </Box>
    );
}
