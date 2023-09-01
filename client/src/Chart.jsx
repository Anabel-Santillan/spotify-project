import React, { useEffect } from 'react'
import axios from "axios";



function Chart() {
  useEffect(() => {
      axios
        .get(
          "http://localhost:3001/me",
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
  }, [])
  return (
    <div>Chart</div>
  )
}

export default Chart