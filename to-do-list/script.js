/*
  ADD BUTTON
*/
// get the "add" button from the HTML document by its id
var addButton = document.getElementById("add-button");
// listen for the "add" button to be clicked, and run the function to add an item
addButton.addEventListener("click", addToDoItem);
// temporary add function
function addToDoItem() {
  alert("Add button clicked!");
}

/*
  CLEAR COMPLETED BUTTON
*/
// get the "clear completed" button from the HTML
var clearCompletedButton = document.getElementById("clear-completed-button");
// listen for the "clear completed" button to be clicked, and run the function to clear an item
clearCompletedButton.addEventListener("click", clearCompletedToDoItems)
// temporary clear function
function clearCompletedToDoItems() {
  alert("Clear Completed button clicked!");
}
