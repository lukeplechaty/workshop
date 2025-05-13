console.log("hi");

const form = document.getElementById("prefrernces");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const textColour = formData.get("text-colour");
  const backgroundColour = formData.get("background-colour");
  const prefrernces = {
    textColour,
    backgroundColour,
  };
  localStorage.setItem("prefrernces", JSON.stringify(prefrernces));
  loadPrefrernces();
});

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", () => {
  localStorage.clear();
  loadPrefrernces();
});

function loadPrefrernces() {
  const prefrernces = JSON.parse(localStorage.getItem("prefrernces"));

  const textColourInput = document.getElementById("text-colour-input");
  textColourInput.value = prefrernces ? prefrernces.textColour : "#000000";

  const backgroundColourInput = document.getElementById(
    "background-colour-input"
  );
  backgroundColourInput.value = prefrernces
    ? prefrernces.backgroundColour
    : "#ffffff";

  const body = document.querySelector("body");
  body.style.color = prefrernces ? prefrernces.textColour : "#000000";
  body.style.backgroundColor = prefrernces
    ? prefrernces.backgroundColour
    : "#ffffff";
}

window.addEventListener("storage", loadPrefrernces);

loadPrefrernces();
