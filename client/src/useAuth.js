import React, { useState, useEffect } from "react";
import axios from "axios";

function useAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:3001/login", {
        code,
      })
      .then((res) => {
        console.log(res.data);
        window.history.pushState({}, null, '/')
      })
      .catch(() => {
        window.location = '/'
      })
  }, [code]);
}
export default useAuth;
