const express = require("express");
const { getAllGroups, getGroupById } = require("../prisma/groups");

const prodRouter1 = express.Router();

// GET "/api/groups/"
prodRouter1.get("/", async (req, res) => {
  try {
    const groups = await getAllGroups();
    res.send(groups);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// GET "/api/groups/:id"
prodRouter1.get("/:id", async (req, res) => {
  try {
    const group = await getGroupById(parseInt(req.params.id));
    res.send(group);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = prodRouter1;