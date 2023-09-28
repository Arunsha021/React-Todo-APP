   import React from "react";
   import './TaskList.css';


   const TaskList =({tasks,completeTask,deleteTask})=>{
       return (
       <ul class="task-list">
     {tasks.map((task,index)=>(
       <li  key={index} class="task-item">
          <span class="task-text" style={{textDecoration:task.completed ? 'line-through':'none'}}>
         {task.text}
          </span>
          <div class="task-actions">
        <button onClick={()=> completeTask(index)}>
         {task.completed? 'Uncomplete':'complete'}
        </button>

      <button onClick={()=>deleteTask(index)}> Delete </button>
      </div>
       </li>
      ))}
       </ul> 
       );  

   };
     export default TaskList;
