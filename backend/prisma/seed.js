const bcrypt = require("bcrypt");
const { createUser } = require("./users");
const { Prisma } = require("@prisma/client");
const { createGroup } = require("./groups");
const { createChat } = require("./chats")

const users = [];
const group = [];
const chats = [];

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

const addGroup = async () => {
  console.log("Adding Group");
  const group1 = {
    name: "Group1",
    info: "A group",
    memberId: 1
  }
  const group2 = {
    name: "Group2",
    info: "Another Group",
    memberId: 2
  }
  group.push(await createGroup(group1));
  group.push(await createGroup(group2))

  console.log("Done adding groups");
}

const addChat = async () => {
  console.log("Adding Chat");
  const chat1 = {
    message: "Hola Chat 1",
    userId: 1,
    groupId: 1
  }
  const chat2 = {
    message: "Hello CHat 2",
    userId: 2,
    groupId: 2
  }
  chats.push(await createChat(chat1));
  chats.push(await createChat(chat2))

  console.log("Done adding chats");
}

const seed = async () => {
  console.log("Starting Seed");

  //create some users
  await addUsers();

  //Create some groups
  await addGroup();

  //Create some chats
  await addChat();

  console.log("Ending Seed");
};

seed();