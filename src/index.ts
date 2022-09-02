import express from "express";
import {DbConnection} from "./db";
import {itemRouter} from "./routes/items.routes";
import cors from 'cors';

const app = express();
const PORT = process.env.PORT;

(async () => {
  try {
    const db = new DbConnection();
    await db.connect();
    app.use(cors());
    app.use(express.json())
    app.use('/items', itemRouter);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log('ERROR', error)
  }
})();

