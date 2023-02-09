// services/taskService.js
import db from "../database"

export function addTask(label) {
    const id = db.tasks.length + 1;
    
    const newTask = { id, label, completed: false };

    db.tasks.push(newTask);
}

export function setStatus(id) {
    const sameId = (task) => task.id === id;

    const index = db.tasks.findIndex(sameId);
    
    db.tasks[index].completed = !db.tasks[index].completed;
}

export function getTasks() {
    return [...db.tasks];
}
