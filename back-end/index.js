import cors from "cors"
import bodyParser from "body-parser";
import express from "express";
import { errorHandler, errorHandlerDataFount } from "./handlers/index.js";
import dotenv from 'dotenv';
import conectDB from "./models/index.modek.js";


dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 4000;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => res.json({
    hello: 'me here'
}));

app.use(errorHandlerDataFount)

app.use(errorHandler)

app.listen(PORT, () => {
     conectDB();
    console.log(`Server listen at PORT ${PORT}`);
  });