const express = require("express");
const { getAllChats, getChatById } = require("../prisma/chats");

const prodRouter2 = express.Router();

// GET "/api/chats/"
prodRouter2.get("/", async (req, res) => {
  try {
    const chats = await getAllChats();
    res.send(chats);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// GET "/api/chats/:id"
prodRouter2.get("/:id", async (req, res) => {
  try {
    const chat = await getChatById(parseInt(req.params.id));
    res.send(chat);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = prodRouter2;