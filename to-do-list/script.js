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
// clear any completed items
function clearCompletedToDoItems() {
  // get all elements from "toDoList" that are part of the class "completed"
  var completedItems = toDoList.getElementsByClassName("completed");
  
  // loop through these items and remove them one by one
  while (completedItems.length > 0) {
    completedItems.item(0).remove();
  }
}

/*
  EMPTY LIST BUTTON
*/
// get the "empty list" button from the HTML
var emptyListButton = document.getElementById("empty-button")
// listen for the "empy list" button to be clicked, and run the function to empty the list
emptyListButton.addEventListener("click", emptyList);
// empty the list by removing all items from toDoList
function emptyList() {
  // get all the children
  var toDoItems = toDoList.children;
  while (toDoItems.length > 0) {
    toDoItems.item(0).remove();
  }
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

// toggle the item from done to undone, or vice versa
// we will call this function on a todo item, which will be "this"
// we want to either add "completed" to its list of HTML classes or remove it
function toggleToDoItemState() {
  if (this.classList.contains("completed")) {
    this.classList.remove("completed");
  } else {
    this.classList.add("completed");
  }
}

// save the list
function saveList() {
  // create an array to save each item as an object
  var toDos = [];
  // for each item
  for (var i = 0; i < toDoList.children.length; i++) {
    // create a variable for the item itself
    var toDo = toDoList.children.item(i);
    // then create an object to store both its name and its completion
    var toDoInfo = {
      "task": toDo.innerText,
      "completed": toDo.classList.contains("completed") // true or false
    };
    // finally push that object into the array
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }
}

// load the list, if it exists
function loadList() {
  // if the list exists in local storage
  if (localStorage.getItem("toDos") != null) {
    // get all the items out of storage
    var toDos = JSON.parse(localStorage.getItem("toDos"));
        // for each item
        for (var i = 0; i < toDos.length; i++) {
            // create it as a new todo item
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
  }
}
// load any time the page opens
loadList();
