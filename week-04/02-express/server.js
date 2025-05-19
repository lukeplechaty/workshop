import express from "express";

const app = express();
app.use(express.json());
app.listen(8080, () => {
  console.log("server runing on 8080");
});

app.get("/", (request, response) => {
  response.json({
    message: "hi",
    number: 2,
    boolean: true,
  });
});

app.get("/breakfree", (request, response) => {
  response.json({ message: "I want to break free" });
});

app.post("/repeat", (request, response) => {
  const body = request.body;
  response.json(body);
});

var temp = null;
app.post("/setData", (request, response) => {
  temp = request.body;
  response.sendStatus(200);
});

app.get("/getData", (request, response) => {
  response.json(temp);
});
