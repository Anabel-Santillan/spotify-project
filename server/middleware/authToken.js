const authToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (token) {
    res.locals.access_token = token;
    next();
  } else {
    res.sendStatus(500)
  }
}

module.exports = authToken;