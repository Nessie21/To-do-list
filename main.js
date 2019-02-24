var input = document.getElementById("inputTask");
var button = document.getElementById("addTask");
var taskList = document.getElementsByClassName("taskList")[0];

function addTask() {
    if (input.value.length > 0) {
        var newTask = document.createElement('li');
        var listElements = document.querySelectorAll("li");
        var taskNumber = listElements.length + 1;
        newTask.innerText = input.value + ' (' + taskNumber + ')';
        taskList.appendChild(newTask);
        input.value = '';
    } else {
        console.log("Wpisz coś");
    }
}

button.addEventListener("click", addTask);