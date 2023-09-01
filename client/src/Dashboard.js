import React, {useEffect} from "react";
import SpotifyWebApi from "spotify-web-api-node";
import Chart from "./Chart";
import useAuth from './useAuth'

const spotifyApi = new SpotifyWebApi({
  clientId: "31bdae6bb1e148fcaf3178cc5e67b5ae",
});
function Dashboard({ code }) {
  const accessToken = useAuth(code) 
    useEffect(() => {
      if (!accessToken) return;
      spotifyApi.setAccessToken(accessToken);
    }, [accessToken]);

  return <div><Chart /></div>;
}

export default Dashboard;
