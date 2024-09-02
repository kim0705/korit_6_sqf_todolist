import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function CompleteTodoList({ todoList, setTodoList, requestTodoList }) {
    return (
        <div css={s.listbox}>
            <div css={s.titleBox}>
                <h2>완료 List</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>선택</th>
                        <th>내용</th>
                        <th>날짜</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {todoList.filter(todo => !!todo.checkStatus).map(todo => (
                        <TodoItem
                            key={todo.todoId}
                            todo={todo}
                            todoList={todoList}
                            setTodoList={setTodoList}
                            requestTodoList={requestTodoList}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CompleteTodoList;
