// components/TaskForm.jsx
import { useForm } from "react-hook-form";
import { Button, TextField} from "@mui/material";

import { addTask, getTasks } from "../services/apiService"

const TaskForm = ({ setList }) => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (task) => {
        await addTask(task.label);
        reset();
        setList(await getTasks())
    };

    return (
        <form
            onSubmit={ handleSubmit(onSubmit) }
            style={{ display: "flex", justifyContent: "flex-end" }} >

            <TextField
                variant="filled"
                label="Nova Tarefa"
                { ...register('label') }
                fullWidth={true}
            />

            <Button
                variant="contained"
                type="submit"
                style={{ margin: "10px 20px" }}
            >
                Adicionar
            </Button>
        </form>
    );
}

export default TaskForm;