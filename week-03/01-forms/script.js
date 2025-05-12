console.log("hi");

const mainForm = document.getElementById("main-form");
console.log(mainForm);

mainForm.addEventListener("submit", (e) => {
  console.log("submited");
  e.preventDefault();

  const formData = new FormData(mainForm);
  console.log(formData);

  const formValue = Object.fromEntries(formData);
  console.log(formValue);
});

const loginForm = document.getElementById("login");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const loginData = Object.fromEntries(new FormData(loginForm));
  if (loginData.user === "Luke" && loginData.password === "letmein") {
    alert("Hello Luke");
  } else {
    alert("!!!INTRUDER!!!");
  }
});
