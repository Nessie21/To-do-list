var input = document.getElementById("inputTask");
var button = document.getElementById("addTask");
var taskList = document.getElementsByClassName("taskList")[0];


function addTask() {
    if (input.value.length > 0) {
      
        var task = document.createElement('div');
        task.classList.add('task');

        var taskName = document.createElement('p');
        taskName.classList.add('task-name');
        taskName.innerText = input.value;
        task.appendChild(taskName);
        input.value='';
        
        taskList.appendChild(task);

        var buttonEdit = document.createElement('button');
        buttonEdit.classList.add('edit-button');
        buttonEdit.innerText = 'edit';
        task.appendChild(buttonEdit);

        var buttonDelete = document.createElement('button');
        buttonDelete.classList.add('delete-button');
        buttonDelete.innerText = 'delete';
        task.appendChild(buttonDelete);

        var check = document.createElement('input');
        check.type ='checkbox';
        check.classList.add('check');
        task.appendChild(check);


        buttonDelete.addEventListener('click', deleteTask);
        buttonEdit.addEventListener('click', editTask);
        check.addEventListener('change', checkTask)

        function deleteTask(){
        taskList.removeChild(task);
        }

        function editTask(){
        
        var editInput = document.createElement('input');
        editInput.classList.add('edit-input');
        task.appendChild(editInput);    
        editInput.value = taskName.innerHTML;
        var applyButton = document.createElement('button');
        applyButton.classList.add('apply-button');
        applyButton.innerText = 'apply';
        task.appendChild(applyButton)
        applyButton.addEventListener('click', applyChanges);

        function applyChanges(){
        taskName.innerText = editInput.value;
        editInput.value = '';
        task.removeChild(editInput);
        task.removeChild(applyButton);
        
        
    
        };
    }

        function checkTask(){
        if(this.checked) {taskName.classList.add('strike');} else {taskName.classList.remove('strike')};
        
        } ;


    } 
}


input.addEventListener('keyup', addTaskByEnter);
function addTaskByEnter(e) {
    if (e.keyCode == '13') {
        addTask();
    }   
}

