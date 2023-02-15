const express = require("express");
const app = express();
const port = 3000;

// Endpoint to return an HTML unordered list of cat names from a JSON file
app.get("/cats", (req, res) => {
  // Load the JSON file with cat names
  const catNames = require("./cat-names.json");

  // Generate an HTML unordered list of the cat names
  let html = "<ul>";
  catNames.forEach(name => {
    html += `<li>${name}</li>`;
  });
  html += "</ul>";

  // Send the HTML back to the client as a response
  res.send(html);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
