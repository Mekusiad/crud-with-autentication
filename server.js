import dotenv from "dotenv";
import { createServer } from "http";
import { app } from "./app.js";
import { mongoose } from "mongoose";

dotenv.config();

const port = process.env.PORT || 3000;
const server = createServer(app);
const uri = `mongodb+srv://${process.env.DATABASE_LOGIN}:${process.env.DATABASE_PASSWORD}@apicluster.ivyracg.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Conectado ao mongoose.");
    server.listen(port);
  })
  .catch((error) => {
    console.error("Error: ", error);
  });
