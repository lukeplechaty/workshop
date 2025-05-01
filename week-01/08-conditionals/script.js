console.log("hi");

let isLit = false;
let mySwitch = document.getElementById("switch");
let h1Text = document.querySelector("h1");
document.body.style.backgroundColor = "black";
h1Text.style.color = "white";
mySwitch.addEventListener("click", (e) => {
  isLit = !isLit;
  if (isLit) {
    h1Text.textContent = "Light ON";
    h1Text.style.color = "black";
    document.body.style.backgroundColor = "white";
  } else {
    h1Text.textContent = "Light OFF";
    h1Text.style.color = "white";
    document.body.style.backgroundColor = "black";
  }
  console.log(isLit);
});
