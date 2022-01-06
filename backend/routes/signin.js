//joi
//does user exists
//validate password
//jwt => send to the client

const Joi = require("joi");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const { append } = require("express/lib/response");

const router = express.Router();

//SIGIN the use
router.post("/", async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().min(3).max(200).email().required(),
    password: Joi.string().min(6).max(200).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    //status 400 ===> bad request
    return res.status(400).send(error.details[0].message);
  }

  try {
    //does user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send("Ivalid email or password");
    }

    //validate password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).send("Ivalid email or password");
    }

    //jwt => send to the client
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      secretKey
    );
    res.send(token);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

module.exports = router;
