const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllGroups = async () => {
  try {
    const groups = await prisma.group.findMany();
    return groups;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getGroupById = async (id) => {
  try {
    const group = await prisma.group.findUnique({
      where: {
        id: id
      }
    });
    return group;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

const createGroup = async (group) => {
  try{
    const groupDB = await prisma.group.create({
      data: group
    }); 
    return groupDB;
  }
  catch (err){
    console.log(err);
    return undefined;
  }
};

const updateGroup = async () => {};

const deleteGroup = async () => {};

module.exports = {
  getAllGroups,
  getGroupById,
  createGroup,
  updateGroup,
  deleteGroup,
};