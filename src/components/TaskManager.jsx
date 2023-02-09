// components/TaskManager.jsx
import { useState, useEffect } from "react";
import { getTasks } from "../services/apiService";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function TaskManager() {
  const [ tasks, setList ] = useState([]);

  const fetchData = async () => {
    const apiTasks = await getTasks();
    setList(apiTasks);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <TaskForm setList={setList}/>
      
      <TaskList tasks={tasks} setList={setList}/>      
    </div>
  );
}
