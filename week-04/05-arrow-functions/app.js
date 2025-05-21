function add(a, b) {
  return a + b;
}

const add = (a, b) => a + b;

async function getPost() {
  const response = await fetch("#");
  const data = await response.json();
  return data;
}

const getPost = async () => {
  const response = await fetch("#");
  const data = await response.json();
  return data;
};

//==============================================

const handleSubmit = (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const message = event.target.message.value;
  console.log({ username: username, message: message });
};

form.addEventListener("submit", handleSubmit);

// =============================================

button.addEventListener("click", () => {
  let count = 0;
  count += 1;
});

// =============================================

games.forEach((game) => {
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const img = document.createElement("img");
});

// =============================================
const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

//================================================
app.get("/", (req, res) => console.log("root route"));
