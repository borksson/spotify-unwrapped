import { useEffect } from "react"
import { GenerateImage, ShareImage } from "../api/ImageGenerator";
import { Box, Button, Center } from "@chakra-ui/react";

export default function ImagePage() {
    useEffect(() => {
        GenerateImage(sessionStorage.getItem("token")!);
    }, []);

    return (
        <Box bg="black" minHeight="100vh" color="gray.300">
            <Center flexDirection="column" height="70vh" bg="black" p={4}>
                <Button onClick={() => ShareImage()} colorScheme="green">Download</Button>
                <canvas id="canvas" height="500" width="500" />
            </Center>
        </Box>
    )
}