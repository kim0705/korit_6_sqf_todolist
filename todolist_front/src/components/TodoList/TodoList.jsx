import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ todoList, setTodoList, requestTodoList })  {
    return (
        <div className="list">
            <div className="sc-box">
                <h2>전체 List</h2>
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
                    {todoList.map(todo => (
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

export default TodoList;
