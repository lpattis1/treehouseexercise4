// Variables
const inStock = [
  "pizza",
  "cookies",
  "eggs",
  "apples",
  "milk",
  "cheese",
  "bread",
  "lettuce",
  "carrots",
  "broccoli",
  "potatoes",
  "crackers",
  "onions",
  "tofu",
  "limes",
  "cucumbers",
];
const search = prompt("Search for a product.");
const main = document.querySelector("main");
let message;

// Function
const customerSearch = function (message) {
  if (inStock.includes(search.toLowerCase())) {
    return (message = `<h2>Yes, we have <strong>${search}</strong>. It is <strong>#${inStock.indexOf(
      search
    )}</strong> on our list!</h2>`);
  } else if (search === "") {
    return (message = `<h2>Here is a list of all our current products:</h2> <p>${inStock.join(
      ", "
    )}</p>`);
  } else {
    return (message = `<h2>Sorry, <strong>${search}</strong> is currently not in stock. Try again soon!</h2>`);
  }
};

main.innerHTML = customerSearch(message);
