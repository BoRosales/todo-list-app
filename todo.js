todoInput = "";

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
}