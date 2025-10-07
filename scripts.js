let tasks = [
    { id: 1, task: 'Rappel Js', taskState: 'Pending' },
    { id: 2, task: 'Exercice CRUD', taskState: 'Pending' },
    { id: 3, task: 'Rappel des fonctions des tables', taskState: 'Pending' }
];

const showAddTaskForm = () => {
    const addSection = document.querySelector(".taskAdd");
    addSection.classList.remove("hide");
}

const showTasks = () => {
    let newHtml = "";
    for (let i = 0; i < tasks.length; i++) {
        newHtml += "<tr>";
        newHtml += `<td>${tasks[i].id}</td>`;
        newHtml += `<td>${tasks[i].task}</td>`;
        newHtml += `<td>${tasks[i].taskState}</td>`;
        newHtml += `<td><button class="btn btn-success" onclick="editTask(${tasks[i].id})">Editer</button></td>`;
        newHtml += `<td><button class="btn btn-danger" onclick="deleteTask(${tasks[i].id})">Supprimer</button></td>`;
        newHtml += "</tr>";
    }
    document.querySelector("tbody").innerHTML = newHtml;
}

const addTask = (event) => {
    event.preventDefault();
    const newTask = {
        id: tasks[tasks.length - 1].id + 1,
        task: document.getElementById("task").value,
        taskState: "Pending"
    }
    tasks = [...tasks, newTask];
    document.getElementById("task").value = "";
    showTasks();
}

const deleteTask = (id) => {
    const myModal = new bootstrap.Modal(document.getElementById('deleteModal'));
    document.getElementById("confirmDelete").onclick = function() {
        tasks = tasks.filter(task => task.id !== id);
        showTasks();
        myModal.hide();
    }
    myModal.show();
}

const editTask = (id) => {
    const taskToEdit = tasks.find(t => t.id === id);
    document.getElementById("editTaskInput").value = taskToEdit.task;
    document.getElementById("editTaskState").value = taskToEdit.taskState;

    const myModal = new bootstrap.Modal(document.getElementById('editModal'));
    document.getElementById("saveEdit").onclick = function() {
        const newText = document.getElementById("editTaskInput").value;
        const newState = document.getElementById("editTaskState").value;
        if (newText.trim() !== "") {
            taskToEdit.task = newText;
            taskToEdit.taskState = newState;
            showTasks();
            myModal.hide();
        }
    }
    myModal.show();
}

const init = () => {
    const btnAdd = document.getElementById("btnAdd");
    btnAdd.addEventListener("click", showAddTaskForm);
    showTasks();
}

window.addEventListener("load", init);
