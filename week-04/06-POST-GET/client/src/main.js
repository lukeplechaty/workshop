const url = "http://localhost:3000";
const form = document.getElementById("message-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const values = Object.fromEntries(data);
  fetch(url + "/setMsg", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
});

async function getMessages() {
  const res = await fetch(url + "/getMsg");
  const data = await res.json();
  return data;
}

const contaner = document.getElementById("messages");
async function addMessage() {
  contaner.removeChild();
  const data = await getMessages();
  data.forEach((item) => {
    const message = document.createElement("p");
    message.textContent = `${item.user_name}: ${item.message}`; //new Date(item.time_stamp);

    contaner.appendChild(message);
  });
}

setInterval(addMessage, 1000);
