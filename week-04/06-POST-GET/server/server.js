import express from "express";
import dotenv from "dotenv";
import pg from "pg";
import cors from "cors";

dotenv.config();
const db = new pg.Pool({ connectionString: process.env.DB_URL });
const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => console.log("Server running on 3000"));

app.post("/setMsg", (req, res) => {
  const body = req.body;
  const query = db.query(
    `INSERT INTO messages (message, user_name, time_stamp) VALUES ($1, $2, $3)`,
    [body.message, body.user_name, new Date().getTime()]
  );
  res.json(query);
});

app.get("/getMsg", async (req, res) => {
  const data = await db.query(`SELECT * FROM messages`);
  let dataJson = data.rows;
  const queryString = req.query.user;
  if (queryString) {
    dataJson = dataJson.filter((item) => {
      return item.user_name.toLowerCase() === queryString.toLowerCase();
    });
  }
  res.json(dataJson);
});
