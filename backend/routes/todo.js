const express = require("express");
const joi = require("joi");

const Todo = require("../models/todo");
const auth = require("../middleware/auth");

const router = express.Router();
//********************************************************************************** */
//READ all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find().sort({ date: -1 });
    res.send(todos);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//************************************************************************************ */
//CREATE new todo
router.post("/", async (req, res) => {
  //joi validations
  const schema = joi.object({
    name: joi.string().min(3).max(200).required(),
    author: joi.string().min(3).max(30),
    uid: joi.string(),
    isComplete: joi.boolean(),
    date: joi.date(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    //status 400 ===> bad request
    return res.status(400).send(error.details[0].message);
  }

  const { name, author, uid, isComplete, date } = req.body;

  const todo = new Todo({
    name,
    author,
    uid,
    isComplete,
    date,
  });
  try {
    const newTodo = await todo.save();
    res.send(newTodo);
  } catch (error) {
    console.log(error.message);
    //Status 500 ===> Server Error
    res.status(500).send(error.message);
  }
});
//************************************************************************************* */
//DELETE todo
router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      //Status 400 ===> Not-Found
      res.status(400).send("Todo not found!");
    }

    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    res.send(deletedTodo);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});
//*********************************************************************************** */
//UPDATE todo PUT
router.put("/:id", async (req, res) => {
  //joi validations
  const schema = joi.object({
    name: joi.string().min(3).max(200).required(),
    author: joi.string().min(3).max(30),
    uid: joi.string(),
    isComplete: joi.boolean(),
    date: joi.date(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    //status 400 ===> bad request
    console.log("joi error*****************");
    return res.status(400).send(error.details[0].message);
  }

  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      //Status 400 ===> bad request
      res.status(400).send("Todo not found!");
    }

    const { name, author, uid, isComplete, date } = req.body;

    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        name,
        author,
        uid,
        isComplete,
        date,
      },
      { new: true }
    );
    res.send(updatedTodo);
  } catch (error) {
    console.log(`OHHH NOOOOO ${error}`);
    res.status(500).send(error.message);
  }
});
//***********************************************************************************
//TOGGLE isComplete patch
router.patch("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      //Status 400 ===> bad request
      res.status(400).send("Todo not found!");
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        isComplete: !todo.isComplete,
      },
      { new: true }
    );
    res.send(updatedTodo);
  } catch (error) {
    console.log(`OHHH NOOOOO ${error}`);
    res.status(500).send(error.message);
  }
});

module.exports = router;
