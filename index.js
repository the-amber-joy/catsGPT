const express = require("express");
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static("public"));

// Endpoint to return an HTML unordered list of cat names with attributes from a JSON file
app.get("/", (req, res) => {
  // Load the JSON file with cat data
  const catData = require("./cat-names.json");

  // Generate an HTML unordered list with sub-lists for each cat's attributes
  let html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Cat List</title>
        <link rel="stylesheet" type="text/css" href="style.css">
      </head>
      <body>
        <ul class="cat-list">
  `;
  catData.forEach(cat => {
    html += `
          <li class="cat-item">${cat.name}
            <ul class="cat-attributes">
              <li>Size: ${cat.size}</li>
              <li>Color: ${cat.color}</li>
            </ul>
          </li>
    `;
  });
  html += `
        </ul>
      </body>
    </html>
  `;

  // Send the HTML back to the client as a response
  res.send(html);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
