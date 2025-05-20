import express from "express";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();
const db = new pg.Pool({ connectionString: process.env.DB_URL });
const app = express();
app.use(express.json());
app.listen(8080, () => {
  console.log("server running on 8080");
});

app.get("/getMsg", async (request, response) => {
  const data = await db.query(`SELECT * FROM messages`);
  response.json(data.rows);
});
app.post("/setMsg", (request, response) => {
  const data = request.body;
  db.query(
    `INSERT INTO messages (mssage,user_name,time_stamp) VALUES ($1, $2, $3)`,
    [data.msg, data.user, new Date().getTime()]
  );
  response.json({});
});
