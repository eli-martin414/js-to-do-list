// get the "add" button from the HTML document by its id
var addButton = document.getElementById("add-button");
// listen for the "add" button to be clicked
addButton.addEventListener("click", addToDoItem);
// test that the "add" button is being properly listened for
function addToDoItem() {
  alert("Add button clicked!");
}