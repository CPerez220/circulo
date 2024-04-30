const express = require('express');
const prodRouter1 = require('./groups');
const prodRouter2 = require("./chats")

const apiRouter = express.Router();

apiRouter.use("/chats", prodRouter1);
apiRouter.use("/groups", prodRouter2);

module.exports = apiRouter;