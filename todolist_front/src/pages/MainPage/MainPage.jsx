import RegisterTodo from '../../components/RegisterTodo/RegisterTodo';
import TodoList from '../../components/TodoList/TodoList';
import IncompleteTodoList from '../../components/IncompleteTodoList/IncompleteTodoList';
import CompleteTodoList from '../../components/CompleteTodoList/CompleteTodoList';

function MainPage({setModalOpen, setParams, setUpdateTodo, todoList, setTodoList, requestTodoList}) {
    

    return (
        <div className="container">
            <h1 className='listtitle'>todolist</h1>

            <RegisterTodo
                setParams={setParams}
                requestTodoList={requestTodoList}
            />
            <div className="list-container">

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