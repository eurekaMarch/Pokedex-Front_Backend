const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  let token = req.headers.authorization;
  let key = "westride123";

  if (!token) {
    return res.status(403).send("Token is require");
  }

  try {
    let tokens = token.split(" ");
    let decode = jwt.verify(tokens[1], key);
    console.log(decode, "<<decode");
    req._user = decode;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).send(error);
  }
};

module.exports = auth;
