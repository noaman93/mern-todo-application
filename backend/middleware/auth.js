//function
//does the token exist
//verift the tokken
//next()

const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  //does the token exist
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).send("Not Authorized ...");
  }

  //verift the tokken
  try {
    const secretKey = process.env.SECRET_KEY;
    const payload = jwt.verify(token, secretKey);
    req.user = payload;
    next;
  } catch (error) {
    console.log(error);
    res.status(400).send("Invalid token");
  }
}

module.exports = auth;
