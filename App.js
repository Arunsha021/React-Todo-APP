  import React,{useState,useEffect} from "react";
  import TaskForm from "./Components/Taskformcomponent/TaskForm";
  import TaskList from "./Components/Taskformcomponent/TaskList";
  import  './App.css';



const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const saveTasksToLocalStorage = (updatedTasks) => {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const addTask = (taskText) => {
    const updatedTasks = [...tasks, { text: taskText, completed: false }];
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const completeTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  return (
    <div class="container">
      <h1 class="heading">TODO App</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;