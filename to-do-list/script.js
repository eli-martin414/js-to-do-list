/*
  ADD BUTTON
*/
// get the "add" button from the HTML document by its id
var addButton = document.getElementById("add-button");
// listen for the "add" button to be clicked, and run the function to add an item
addButton.addEventListener("click", addToDoItem);
// temporary add function
function addToDoItem() {
  var itemText = toDoEntryBox.value;
  newToDoItem(itemText, false);
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

/*
  LIST ITEMS
*/
// get the entry box and the list of items
var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");
// create a new item on the list
// this item may be completed if we're loading from a saved list
function newToDoItem(itemText, completed) {
  // create a new li element for the HTML list
  var toDoItem = document.createElement("li");
  // create a text node of "itemText" that's passed in
  var toDoText = document.createTextNode(itemText);
  // append the text node in the li toDoItem
  toDoItem.appendChild(toDoText);
  // if the item was marked as completed
  if (completed) {
    // then add the "completed" class to the li item
    // the class is used in the CSS file to change the appearance
    toDoItem.classList.add("completed");
  }
  // put the li (list item) element in the ol (ordered list) element
  toDoList.appendChild(toDoItem);
  // add a listener so that when the item is double-clicked,
  // it gets marked as completed
  toDoItem.addEventListener("dblclick", toggleToDoItemState);
}
