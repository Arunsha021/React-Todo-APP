 import React,{useState} from "react";
 import './TaskForm.css';

  const TaskForm = ({addTask})=>{
    const [task,setTask]= useState('');

    const handleTaskChange =(event)=>{
      setTask(event.target.value);
    };

    const handleSubmit=(event)=>{
      event.preventDefault();
       if(task.trim()!==''){
        addTask(task);
        setTask('');
       }
    };
      return (
       <form class='form-container' onSubmit={handleSubmit}>
         <input class='input-field' type="text"
         placeholder="Add a new task"
         value={task}
         onChange={handleTaskChange}
         
         />
        <button class="add-button" type="submit">Add Task </button>
     </form>
      );
      };

       export default TaskForm;
