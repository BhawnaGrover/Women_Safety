const mongoose = require("mongoose");
require("dotenv").config();

const databaseUrl = process.env.MONGODB_URL;
const databaseName = process.env.MONGODB_NAME;

const connectDatabase = () => {
  try {
    const con = mongoose.connect(databaseUrl, {
      dbName: databaseName
    });

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log(
        `MongoDB Database 
        \n\tWith host: ${connection.host}\n\tWith Name: ${connection.name}
        \nConnection established successfully!`
      );
    });

    connection.on("disconnected", () => {
      console.log(`MongoDB database connection disconnected from host : ${connection.host}`);
    });
  } catch (err) {
    console.log("Error connecting to mongo: ", err);
  }
};

module.exports = {connectDatabase};