// components/TaskItem.jsx
import { ListItem, ListItemText, Checkbox } from "@mui/material";

import { getTasks, setStatus } from "../services/apiService";

const TaskItem = ({ task, setList }) => (
    <ListItem onChange={async () => { 
        await setStatus(task.id);
        setList(await getTasks());
    }}>
        <Checkbox checked={task.completed} />
        <ListItemText primary={task.label} />
    </ListItem>
);

export default TaskItem;