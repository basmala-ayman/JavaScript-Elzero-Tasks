let tasks = document.getElementById("tasks");

function createDiv(task,id) {
    let newDiv = document.createElement("div");
    newDiv.style.cssText = "display:flex; justify-content: space-between; font-size: 18px"
    
    // add task to its div
    let text = document.createElement("div");
    text.innerHTML = task;
    text.style.cssText = "color: darkcyan; "
    newDiv.appendChild(text);
    
    // add delete button to its div
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.style.cssText = "background-color: red; color: white; font-weight: bold;";
    newDiv.appendChild(deleteBtn);

    tasks.appendChild(newDiv);
}

let addBtn = document.getElementById("addTask")
addBtn.addEventListener("click", function () {
    // let task = document.getElementById("task").va
    window.localStorage.setItem("task",)

})