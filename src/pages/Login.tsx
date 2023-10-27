import { Box, Button, Heading } from '@chakra-ui/react';
import { redirectToAuthCodeFlow, getAccessToken, fetchProfile } from '../api/Authorization';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
  const clientId = "282534a7ae63485388d9d985a889160d";
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Running useEffect");
    if (!code) {
      redirectToAuthCodeFlow(clientId);
    } else {
      getAccessToken(clientId, code).then(() => {
        fetchProfile(sessionStorage.getItem("token")!).then(() => {
          navigate("/home");
        });
      });
    }
  }, [code, clientId, navigate]);

  if(!code) {
    return <></>;
  } else {
    return (
      <Box textAlign="center" mt="40vh" bgColor="#121212" color="white" height="100vh">
        <Heading mb={4} color="red.500">Login failed.</Heading>
        <Button colorScheme="green" onClick={() => redirectToAuthCodeFlow(clientId)}>Retry</Button>
      </Box>
    );
  }
}

export default Login;
