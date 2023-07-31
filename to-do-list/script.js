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

/*
  EMPTY LIST BUTTON
*/
// get the "empty list" button from the HTML
var emptyListButton = document.getElementById("empty-button")
// listen for the "empy list" button to be clicked, and run the function to empty the list
emptyListButton.addEventListener("click", emptyList);
// temporary empty list function
function emptyList() {
  alert("Empty List button clicked!");
}

/*
  SAVE BUTTON
*/ 
// get the "save list" button from the HTML
var saveListButton = document.getElementById("save-button");
// listen for it to be clicked and then run the saveList function
saveListButton.addEventListener("click", saveList);
// temp save list function
function saveList() {
  alert("Save List button clicked!");
}