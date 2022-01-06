//joi
//does user exists?
//create the user
//hash password ---> bcrypt
//save user

const Joi = require("joi");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const router = express.Router();

//************************************************************************************* */
//CREATE new user
router.post("/", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(200).email().required(),
    password: Joi.string().min(6).max(200).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    //status 400 ===> bad request
    return res.status(400).send(error.details[0].message);
  }

  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send("User with same email already exists.....");
    }

    const { name, email, password } = req.body;

    const newUser = new User({
      name,
      email,
      password,
    });

    //has the password
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);

    const newUserSaved = await newUser.save();
    // console.log(newUserSaved);

    //jwt => send to the client
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(
      {
        _id: newUserSaved._id,
        name: newUserSaved.name,
        email: newUserSaved.email,
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
