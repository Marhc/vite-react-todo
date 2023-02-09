// services/taskService.js
import axios from "axios";

const api = axios.create({
	baseURL: "/tasks",
});

export async function addTask(label) {
	try {
		const response = await api.post("", { label, completed: false });
		return response.data;
	} catch (error) {
		console.error(error);
	}
}

export async function setStatus(id) {
	try {
		const response = await api.get(`/${id}`);
		const task = response.data;
		task.completed = !task.completed;

		await api.put(`/${id}`, task);
	} catch (error) {
		console.error(error);
	}
}

export async function getTasks() {
	try {
		const response = await api.get();
		return [...response.data];
	} catch (error) {
		console.error(error);
        return [];
	}
}