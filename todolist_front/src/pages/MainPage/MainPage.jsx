import RegisterTodo from '../../components/RegisterTodo/RegisterTodo';
import TodoList from '../../components/TodoList/TodoList';
import IncompleteTodoList from '../../components/IncompleteTodoList/IncompleteTodoList';
import CompleteTodoList from '../../components/CompleteTodoList/CompleteTodoList';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function MainPage({setModalOpen, setParams, setUpdateTodo, todoList, setTodoList, requestTodoList}) {

    return (
        <div css={s.container}>
            <h1 css={s.listTitle}>todolist</h1>

            <RegisterTodo
                setParams={setParams}
                requestTodoList={requestTodoList}
            />
            <div css={s.listContainer}>

                <TodoList
                    todoList={todoList}
                    setTodoList={setTodoList}
                    requestTodoList={requestTodoList}
                />
                < IncompleteTodoList
                    todoList={todoList}
                    setTodoList={setTodoList}
                    setUpdateTodo={setUpdateTodo}
                    setModalOpen={setModalOpen}
                />

                <CompleteTodoList
                    todoList={todoList}
                    setTodoList={setTodoList}
                    requestTodoList={requestTodoList}
                />

            </div>

        </div>
    );
}

export default MainPage;