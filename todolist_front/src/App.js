/** @JsxImportSource @emotion/react */
import './App.css';
import { Global } from '@emotion/react';
import MainContainer from './components/MainContainer/MainContainer';
import MainLayout from './components/MainLayout/MainLayout';
import { reset } from './styles/global';
import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import UpdateTodoModal from './components/UpdateTodoModal/UpdateTodoModal';
import { etTodoList, getTodoList } from './apis/todoApi';
import MainPage from './pages/MainPage/MainPage';

function App() {
    const [isModalOpen, setModalOpen] = useState(false); // modal 전역으로

    const [params, setParams] = useState({
        registerDate: "",
    })

    const [updateTodo, setUpdateTodo] = useState({
        todoId: "",
        checkStatus: "",
        content: "",
        registerDate: "",
    });

    const [todoList, setTodoList] = useState([]);


    // 조회

    const requestTodoList = async () => {
        const response = await getTodoList(params);
        setTodoList(response?.data);
        console.log(response.data);
    }

    useEffect(() => {

        requestTodoList();
        console.log(params);

    }, [params]);

    return (

        <>
            <Global css={reset} />
            <UpdateTodoModal
                isModalOpen={isModalOpen}
                setModalOpen={setModalOpen}
                updateTodo={updateTodo}
                setUpdateTodo={setUpdateTodo}
                requestTodoList={requestTodoList}
            />
            <MainLayout>
                <MainContainer>
                    <MainPage 
                        setModalOpen={setModalOpen} 
                        setParams={setParams}
                        setUpdateTodo={setUpdateTodo}
                        todoList={todoList}
                        setTodoList={setTodoList}
                        requestTodoList={requestTodoList}
                    />
                </MainContainer>
            </MainLayout>
        </>
    );
}

export default App;