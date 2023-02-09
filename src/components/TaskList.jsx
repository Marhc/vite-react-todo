// components/TaskList.jsx
import { List } from "@mui/material";

import TaskItem from "./TaskItem";

const TaskList = ({ tasks, setList }) => (
    <List>
        {tasks.map((item) => (
            <TaskItem key={item.id} task={item} setList={setList}/>
        ))}
    </List>
)

export default TaskList;