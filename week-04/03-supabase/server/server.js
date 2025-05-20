import express from "express";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();
const app = express();
app.use(express.json());
app.listen(8080, () => {
  console.log("server running on 8080");
});

const db = new pg.Pool({ connectionString: process.env.DB_URL });

// app.get("/", (request, response) => {});
// app.post("/", (request, response) => {});
