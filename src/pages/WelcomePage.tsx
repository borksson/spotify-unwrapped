import { Box, Button, Heading, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
    return (
        <Box textAlign="center" mt="10%">
            <Heading mb={6}>Welcome to Spotify Unwrapped!</Heading>
            <VStack spacing={4}>
                <Link to="/top-artists">
                    <Button colorScheme="green">Top Artists</Button>
                </Link>
                <Link to="/top-tracks">
                    <Button colorScheme="green">Top Tracks</Button>
                </Link>
            </VStack>
        </Box>
    );
}
