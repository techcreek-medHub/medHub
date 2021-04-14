const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET All Users

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    console.log(error);
    res.send({ msg: "There was an error", error });
  }
});

// this is to get a user by the id

router.get("/:id", async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.send({ msg: "There was an error", error });
  }
});

// this is to rigister a user

router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.send(user);
  } catch (error) {
    console.log(error);
    res.send({ msg: "There was an error", error });
  }
});

// this is to delete a user _id 

router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });
    res.send(user);
  } catch (error) {
    console.log(error);
    res.send({ msg: "There was an error", error });
  }
});

//  this is to update a user data

router.put("/user/:id", async (req,res)=>{
  let condition ={ _id:req.params.id }
   
    try {
       const user =await  user.update(condition, req.body)
       res.send(user)
       console.log("user updated successfuly")
    } catch (error) {
      console.log(error)
      res.send({msg: `can't update user at the moment, ${error}`})
    }
})

module.exports = router;


/** the code is subject to corrections as there appears to be bugs */