import { instance } from "./instance";

export const getTodoList = async (params) => {
    let response = null;
    try {
        response = await instance.get(`/todolist`, { params });
    } catch (error) {
        console.error(error);
        response = error.response;
    }
    return response;
};

export const getTodoById = async (todoId) => {
    let response = null;
    try {
        response = await instance.get(`/todo/${todoId}`);
    } catch (error) {
        console.error(error);
        response = error.response;
    }
    return response;
};

export const addTodo = async (todo) => {
    let response = null;
    try {
        response = await instance.post(`/todo`, todo);
    } catch (error) {
        console.error(error);
        response = error.response;
    }
    return response;
};

export const deleteTodo = async (todoId) => {
    let response = null;
    try {
        response = await instance.delete(`/todo/${todoId}`);
    } catch (error) {
        console.error(error);
        response = error.response;
    }
    return response;
};

export const updateTodo = async (todoId, updateTodo) => {
    let response = null;
    try {
        response = await instance.put(`/todo/${todoId}`, updateTodo);
    } catch (error) {
        console.error(error);
        response = error.response;
    }
    return response;
};
