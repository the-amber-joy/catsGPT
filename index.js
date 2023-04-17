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
        <link rel="stylesheet" type="text/css" href="style.css" id="style">
        <!-- viewport meta tag I added later to make this more mobile-friendly -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
        /* Extra CSS added by me to create a footer so we can see the style iterations */
          body {
            overflow: hidden;
            margin: 0;
          }
          footer {
            position: fixed;
            bottom: 0;
            width: 100%;
            height: 50px;
            background-color: #f5f5f5;
            text-align: center;
            line-height: 50px;
            overflow-x: auto;
            white-space: nowrap;
          }
          footer a {
            padding: 0 10px;
            border-right: 1px solid #ccc;
          }
          footer a:last-child {
            border-right: none;
          }
          .selected {
            background-color: purple;
            color: white;
            text-decoration: none;
          }
        </style>
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
        <footer>
          <a href="https://github.com/the-amber-joy/catsGPT#readme">About this project</a>
          <a href="#" data-style="" title="Original code without style">original html (no styling)</a>
          <a href="#" data-style="style-1.css" title="Let's get creative! Please apply some style with CSS. Make it fun!">style version 1</a>
          <a href="#" data-style="style-2.css" title="Can you please make the CSS styling a little MORE fun?">style version 2</a>
          <a href="#" data-style="style-3.css" title="I don't see the purple circle that should be before each cat name.">style version 3</a>
          <a href="#" data-style="style-4.css" title="The CSS styling is too boring. Can you re-write it and make it really wild and crazy?">style version 4</a>
          <a href="#" data-style="style-5.css" title="That is a nightmare. Please try again.">style version 5</a>
          <a href="#" data-style="style-6.css" title="Please change the color for the cat attributes to something that will show up against a background color #fff, and reduce the size of the circles">style version 6</a>
          <a href="#" data-style="style-7.css" title="Add a fading rainbow-colored gradient, perhaps in the background.">style version 7</a>
          <a href="#" data-style="style-8.css" title="I was hoping for more muted watercolor-type colors.">style version 8</a>
          <a href="#" class="selected" data-style="style.css" title="Final Version (make the background cover the entire viewport)">Final Version</a>
        </footer>
      </body>
      <script src="index.js"></script>
    </html>
  `;

  // Send the HTML back to the client as a response
  res.send(html);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
