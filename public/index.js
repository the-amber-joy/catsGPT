const defaultStylesheetLink = document.getElementById("style");
const links = document.querySelectorAll("a[data-style]");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const currentSelection = document.querySelector(".selected");
    currentSelection.removeAttribute("class");
    link.className = "selected";
    const style = link.getAttribute("data-style");
    document.getElementById("style").setAttribute("href", style);
  });
});
