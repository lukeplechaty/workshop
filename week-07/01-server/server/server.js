import { db } from "./utils/dbConnection.js";
import { app } from "./utils/engine.js";

app.post("/", (req, res) => {
  res.json({ message: "we work!" });
});

app.post("/addCat", (req, res) => {
  try {
    const body = req.body;
    const query = db.query(
      `INSERT INTO cats (name, age, colour) VALUES ($1, $2, $3)`,
      [body.name, body.age, body.colour]
    );
    res.json({ added: true });
  } catch {
    console.log("error at addCat");
    res.json({ added: false });
  }
});

app.get("/getCats", async (req, res) => {
  try {
    const query = await db.query(`SELECT * FROM cats`);
    res.json(query.rows);
  } catch {
    console.log("error at getCats");
    res.json({ get: false });
  }
});

app.get("/getCat/:id", async (req, res) => {
  try {
    const params = req.params;
    const query = await db.query(`SELECT * FROM cats WHERE id=($1)`, [
      params.id,
    ]);
    res.json(query.rows);
  } catch {
    console.log("error at getCat");
    res.json({ get: false });
  }
});

app.put("/updateCat/:age/:id", (req, res) => {
  try {
    const params = req.params;
    db.query(`UPDATE cats SET age=($1) WHERE id=($2)`, [params.age, params.id]);
    res.json({ update: true });
  } catch {
    console.log("error at updateCat");
    res.json({ update: false });
  }
});

app.delete("/deleteCat/:id", (req, res) => {
  try {
    const params = req.params;
    db.query(`DELETE FROM cats WHERE id=($1)`, [params.id]);
    res.json({ delete: true });
  } catch {
    console.log("error at deleteCat");
    res.json({ delete: false });
  }
});
