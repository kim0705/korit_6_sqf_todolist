import React from 'react';
import { TfiPencilAlt } from "react-icons/tfi";
import DeleteTodoButton from '../DeleteTodoButton/DeleteTodoButton';
import axios from 'axios';

function TodoItem({ key, todo, todoList, setTodoList, requestTodoList }) {

    const handleCheckedChange = async (todoId) => {
        const todo = todoList.find(todo => todo.todoId === todoId);
        const updatedTodo = {
            ...todo,
            checkStatus: todo.checkStatus === 1 ? 0 : 1  // checkStatus를 1로 변a경
        };

        try {
            await axios.put(`http://localhost:8080/api/v1/todo/${todoId}`, updatedTodo);
            setTodoList(todoList.map(t => t.todoId === todoId ? updatedTodo : t));
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <tr key={key}>
            <input
                className='todo-check'
                type="checkbox"
                checked={todo.checkStatus}
                onChange={() => handleCheckedChange(todo.todoId)}
            />
            <td className='content'>{todo.content}</td>
            <td className='date'>{todo.registerDate}</td>
            <td>
                <DeleteTodoButton
                    todoId={todo.todoId}
                    requestTodoList={requestTodoList}
                />
            </td>
        </tr>
    );
};

export default TodoItem;
