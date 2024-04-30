const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllChats = async () => {
  try {
    const chats = await prisma.chat.findMany();
    return chats;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getChatById = async (id) => {
  try {
    const chat = await prisma.chat.findUnique({
      where: {
        id: id
      }
    });
    return chat;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

const createChat = async (chat) => {
  try{
    const chatDB = await prisma.chat.create({
      data: chat
    }); 
    return chatDB;
  }
  catch (err){
    console.log(err);
    return undefined;
  }
};

const updateChat = async () => {};

const deleteChat = async () => {};

module.exports = {
  getAllChats,
  getChatById,
  createChat,
  updateChat,
  deleteChat,
};