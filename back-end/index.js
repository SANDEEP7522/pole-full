// Run node index.js

import express from "express";
import { errorHandler, errorHandlerDataFount } from "./handlers/index.js";


const app = express();
const PORT = 4000;

app.get("/", (req, res) => res.json({
    hello: 'me here'
}));

app.use(errorHandlerDataFount)

app.use(errorHandler)

app.listen(PORT, () => {
    // conectDB();
    console.log(`Server listen at PORT ${PORT}`);
  });