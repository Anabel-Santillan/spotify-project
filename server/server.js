require("dotenv").config() 
const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser");

const cors = require("cors");
const authToken = require("./middleware/authToken");
// const { body } = require("express-validator");
const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(bodyParser.json())

const spotifyApi = new SpotifyWebApi({
  redirectUri: process.env.REACT_APP_REDIRECT_URI,
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,
});

app.post("/login", (req, res) => {
  const code = req.body.code;

  spotifyApi.authorizationCodeGrant(code).then(
    function (data) {
      res.cookie("access_token", data.body.access_token);
      res.cookie("refresh_token", data.body.refresh_token);
      res.sendStatus(200)
    },
    function (err) {
      console.log("Something went wrong!", err);
    }
  );
});

app.get('/me', authToken, (req, res) => {
  spotifyApi.setAccessToken(res.locals.access_token)
  spotifyApi.getMe().then((data) => {
    res.send(data)
  })
})

// app.get("/callback", function (req, res) {
//   let code = req.query.code || null;
//   let state = req.query.state || null;

//   if (state === null) {
//     res.redirect(
//       "/#" +
//         querystring.stringify({
//           error: "state_mismatch",
//         })
//     );
//   } else {
//     let authOptions = {
//       url: "https://accounts.spotify.com/api/token",
//       form: {
//         code: code,
//         redirect_uri: redirect_uri,
//         grant_type: "authorization_code",
//       },
//       headers: {
//         Authorization:
//           "Basic " +
//           new Buffer.from(client_id + ":" + client_secret).toString("base64"),
//       },
//       json: true,
//     };
//     res.cookie('test', 'test');
//   }
// });



app.listen(3001)