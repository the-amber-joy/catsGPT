const express = require("express");
const app = express();
const port = 3000;

// Endpoint to return a list of cat names from a JSON file
app.get("/cats", (req, res) => {
  // Load the JSON file with cat names
  const catNames = require("./cat-names.json");
  res.json(catNames);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
