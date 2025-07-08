function getUser(id) {
  //to get users
  document
    .getElementById(`fetchUser${id}`)
    .addEventListener("click", async function () {
      const user = await fetchContent(id);
      addContent(`user${id}Name`, user.name);
      addContent(`user${id}Email`, user.email);
    });
}
async function fetchContent(id) {
  //to fetch content
  try {
    //try catch for errors
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = await response.json();
    return user;
  } catch (error) {
    //log the error
    console.log(error);
  }
  return null;
}
function addContent(id, content) {
  //add content to element
  document.getElementById(id).textContent = content;
}
// fetch and display data for user 1
getUser(1);
// fetch and display data for user 2
getUser(2);
// fetch and display data for user 3
getUser(3);
