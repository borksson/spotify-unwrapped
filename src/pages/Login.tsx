import { redirectToAuthCodeFlow, getAccessToken, fetchProfile } from '../api/Authorization';
import { useEffect } from 'react';

function Login() {

  const clientId = "282534a7ae63485388d9d985a889160d";
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  useEffect(() => {
    console.log("Running useEffect");
    if (!code) {
      redirectToAuthCodeFlow(clientId);
    } else {
      getAccessToken(clientId, code).then(() => {
        fetchProfile(sessionStorage.getItem("token")!);
      });
    }
  }, []);

  if(sessionStorage.getItem("profile")) {
    return (
      <p>Welcome {sessionStorage.getItem("profile")} to Spotify Unwrapped!</p>
    )
  } else {
    return <p>Login failed.</p>;
  }

}

export default Login
