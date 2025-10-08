import { useState } from "react"
import TodoList from "./components/TodoList"
import AddTask from "./components/AddTask"
import EditTask from "./components/EditTask";
import DeleteTask from "./components/DeleteTask";

function App() {

  const [tasks, setTasks] = useState(
    [
      { id: 1, task: 'Rappel Js', taskState: 'Pending' },
      { id: 2, task: 'Exercice CRUD', taskState: 'Pending' },
      { id: 3, task: 'Rappel des fonctions des tables', taskState: 'Pending' }
    ]
  );

  const [action, setAction] = useState("");
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const showAddTask = () => {
    setAction("add")
  }

  const addTask = (t) => {
    const newTask = {
      id: tasks[tasks.length - 1].id + 1,
      task: t,
      taskState : "Pending"
    }
    setTasks([...tasks, newTask]);
    setAction("");
  }

  const showEditTask = (id) => {
    const task = tasks.find((t) => t.id === id);
    setTaskToEdit(task);
    setAction("edit");
  }

  const hideEditTask = () => {
    setAction("");
    setTaskToEdit(null);
  }

  const editTask = (updatedTask) => {
    const updatedList = tasks.map((t) =>
      t.id === updatedTask.id ? updatedTask : t
    );
    setTasks(updatedList);
    setAction("");
  };

  const showDeleteTask = (id) => {
    const task = tasks.find((t) => t.id === id);
    setTaskToDelete(task);
    setAction("delete");
  }

  const hideDeleteTask = () => {
    setAction("");
    setTaskToDelete(null);
  }

  const deleteTask = (task) => {
    const updatedList = tasks.filter((t) =>
      t.id !== task.id
    );
    setTasks(updatedList);
    setAction("");
  };

  return (
    
    <div className="container">
      <h1>Gestion des taches :</h1>
      <button id="btnAdd" className="btn btn-primary" onClick={showAddTask}>Ajouter une tache</button>
      <TodoList tasks={tasks} showEdit={showEditTask} showDelete={showDeleteTask} />
      {
        action == "add" && <AddTask addTaskRef={addTask} />
      }
      {
        action == "edit" && taskToEdit && <EditTask editTaskRef={editTask} task={taskToEdit} hideEdit={hideEditTask} />
      }
      {
        action == "delete" && taskToDelete && <DeleteTask deleteTaskRef={deleteTask} task={taskToDelete} hideDelete={hideDeleteTask} />
      }
    </div>
  )
}

export default App
