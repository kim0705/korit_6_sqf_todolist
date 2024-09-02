import React, { useState } from 'react';
import TodoUpdateItem from '../TodoUpdateIem/TodoUpdateItem';
import { getTodoById } from '../../apis/todoApi';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function IncompleteTodoList({ setModalOpen, todoList, setTodoList, setUpdateTodo }) {

    const requestGetTodo = async (todoId) => {
        const response = await getTodoById(todoId);
        return response.data;
    }
    
    const handleUpdateTodoClick = async (todoId) => {

        setModalOpen(true);
        const data = await requestGetTodo(todoId); 
        setUpdateTodo(data);
    }

    return (
        <div css={s.list}>
            <div css={s.scBox}>
                <h2>미완료 List</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>선택</th>
                        <th>내용</th>
                        <th>날짜</th>
                        <th>수정</th>
                    </tr>
                </thead>
                <tbody>
                    {todoList.filter(todo => !todo.checkStatus).map(todo => (
                        <TodoUpdateItem
                            key={todo.todoId}
                            todo={todo}
                            todoList={todoList}
                            setTodoList={setTodoList}
                            handleUpdateTodoClick={handleUpdateTodoClick}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default IncompleteTodoList;
