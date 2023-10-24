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
  }, []);

  if(!code) {
    return (
      <></>
    )
  } else {
    return <p>Login failed.</p>;
  }

}

export default Login
