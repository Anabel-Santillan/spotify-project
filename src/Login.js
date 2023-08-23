import React from "react";
import { Container } from "react-bootstrap";

const code = new URLSearchParams(window.location.search).get('code')

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=5dbe79f6d48743849b2703cf822d7d16&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <a className="btn btn-success btn-large" href={AUTH_URL}>
        Log In With Spotify
      </a>
    </Container>
  );
}

export default Login;
