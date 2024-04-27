const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


const createUser = async (userInfo) => {
  try {
    const userDB = await prisma.user.create({
      data: userInfo,
    });

    return userDB;
  } catch (error) {
    console.log("Error creating user", error);
    return undefined;
  }
};

const getUserByUsername = async (username) => {
  try{
    const user = await prisma.user.findUnique({
      where:{
        username
      }
    })
    return user;
  }
  catch(error){
    console.log("Error getting user", error);
    return undefined;
  }
}

module.exports = {
  createUser,
  getUserByUsername
}