const mongoose = require("mongoose");
const mongodbUrl =
  "mongodb+srv://developer-ta:tayier@@536301@cluster0.xxrx1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(
  mongodbUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

const express = require("express");
const app = express();
const port = 5001;

app.listen(port, () => console.log(`the server run on port --> : ${port}`));

app.get("/", (req, res) => {
  const user = { id: 1, prenom: "Amir" };
  const message = "Réponse";

  res.json({ message, user });
});

app.get("/image", (req, res) => {
  res.sendFile(__dirname + "/img.png");
});

app.get("/package", (req, res) => {
  res.sendFile(__dirname + "/package.json");
});
app.get("/posts", (req, res) => {
  res.sendFile(__dirname + "/posts.json");
});

app.get("/a", (req, res) => {
  res.json("salut bienvenue dans ma maison");
});
app.get("/speak/doc", (req, res) => {
  res.json("le chien des 'wouf wouf'");
});
app.get("/speak/cat", (req, res) => {
  res.status(201).json("chien");
  res.json("le chien des 'miow '");
});

//exercice 3 routes

app.get("/repeat/Word/3", (req, res) => {
  res.json("Word ".repeat(3));
});
app.get("/repeat/Teacher/5", (req, res) => {
  res.json("Teacher ".repeat(5));
});

//exercice 4 routes

app.get("/operate/mul/3/5", (req, res) => {
  res.json("le Résultat :" + 3 * 5);
});
app.get("/operate/add/3/5", (req, res) => {
  res.json("le Résultat :" + 3 + 5);
});
app.get("/operate/sub/9/5", (req, res) => {
  res.json("le Résultat :" + 3 - 5);
});
app.get("/operate/div/15/5", (req, res) => {
  res.json("le Résultat :" + 15 / 5);
});

//exercice 5 routes parametre

app.get("/repeat/cat/:m/:num", (req, res) => {
  let { m, num } = req.params;
  //   let num = req.params.num;

  res.json(m.repeat(num));
});

//exercice 6 routes

app.get("/operate/:option/:op1/:op2", (req, res) => {
  const { option, op1, op2 } = req.params;
  const result = {
    mul: op1 * op2,
    add: parseInt(op1) + parseInt(op2),
    sub: op1 - op2,
    div: op1 / op2,
  };

  res.json({ message: option, result: result[option] });
});
