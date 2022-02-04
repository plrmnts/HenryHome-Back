const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const cors = require("cors");
const { serverPreparation } = require("./libs/serverPreparation.js");

const server = express();

// Configurations
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(cors());

// Initial route
server.get("/",async (req,res)=>{
    await serverPreparation()
    res.send("Henry Home Api")
})

server.use("/api", routes);

module.exports = server;
