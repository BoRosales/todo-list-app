var todoInput = "";
var todoCount = 0;

function getInputVal() {
    todoInput = document.getElementById("add-item").value.trim(); 
    if (todoInput.length < 4) {
        console.log("4 character minimum requirement")
    } 
    console.log(todoInput);
    addToList(todoInput);
}

function addToList(input) {
    var list = document.getElementById("todo-tasks");
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(input));
    list.appendChild(listItem)
    console.log(input);

    var deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("delete"));
    listItem.appendChild(deleteBtn);
}

// TODO: Update counter on UI, that will say what todo task you are on
function updateCounter(todoCount) {

}

// TODO: Delete button next to task. 
function deleteTask() {

}