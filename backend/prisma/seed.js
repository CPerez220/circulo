const bcrypt = require("bcrypt");
const { createUser } = require("./users");
const { Prisma } = require("@prisma/client");

const users = [];

const addUsers = async () => {
  console.log("Adding Users");
  const user1 = {
    firstName: "Carlos",
    lastName: "Perez",
    username: "carlos0",
    email: "carlos0@gmail.com",
    password: bcrypt.hashSync("password5", 10),
    phoneNumber: 5,
    agreeTerms: true
  }
  const user2 = {
    firstName: "Manuel",
    lastName: "Perez",
    username: "carlos1",
    email: "carlos1@gmail.com",
    password: bcrypt.hashSync("password6", 10),
    phoneNumber: 6,
    agreeTerms: true
  }
  

  users.push(await createUser(user1));
  users.push(await createUser(user2))

  console.log("Done adding users");
};

const seed = async () => {
  console.log("Starting Seed");

  //create some users
  await addUsers();

  console.log("Ending Seed");
};

seed();