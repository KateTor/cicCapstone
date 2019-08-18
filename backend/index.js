const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

const models = require("./models")();
models.init();

// app.get("/", (req,res) => {
//     res.send(__dirname + App.js);
// })

//create new user
app.put("/user", async (req, res) => {
    await models.User.create({ name: "kate" });
    res.send({ message: "user created"});
})

//get existing user info - probably won't want a find all but one that matches the user input on sign in
app.get("/users", async (req, res) => {
    res.send({ users: await models.User.findAll() });
})

//Get Quiz Questions upon start of quiz
app.get("/quiz", async (req, res) => {
    res.send({ quizQuestions: await models.quizQuestions    })
})

//send user's answers to user profile in data base
app.post("/quiz", async (req, res) => {
    // req. //send answers to data base?
    res.send({ dogs: await models.dogs.findAll }) //do I need another app.get?
}) 

//return results to user with matching dogs
app.get("/dogs", async (req, res) => {
    res.send({ dogs: await models.dogs.findAll })
})

//create new dog info
app.put("/dogs", async (req, res) => {
    await models.Dogs.create ({ });
    res.send({ message: "Dog was added"})
})

//update existing dog
app.post("/dogs/:id", async (req, res) => {
    await models.Dogs.update (by, id);
})

//specifically update dog if adopted
app.put("/dogs/:id/adopted", async (req, res) => {
    await models.Dogs.update (toBe, Adopted)
})

app.listen(5000, () => {
    console.log("Backend is running on port 5000");
})