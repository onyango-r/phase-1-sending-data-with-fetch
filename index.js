// Function to submit data to the server
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name: name, email: email }),
  })
    .then((response) => response.json())
    .then((data) => {
      const p = document.createElement("p");
      p.textContent = `User ID: ${data.id}`;
      document.body.appendChild(p);
    })
    .catch((error) => {
      const p = document.createElement("p");
      p.textContent = `Error: ${error.message}`;
      document.body.appendChild(p);
    });
}
if (typeof module !== "undefined") {
  module.exports = { submitData };
}

