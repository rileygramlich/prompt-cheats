const User = require("../../models/user");
const jwt = require("jsonwebtoken");

module.exports = {
  create,
  login
};

/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.status(200).json(token);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

async function login(req, res) {
  console.log('logging in')
  console.log(req.body)
  try {
    const user = await User.findOne({email: req.body.email})
    console.log(user.name)
    const token = createJWT(user);
    res.status(200).json(token)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}
