import './App.css';
import { Global, css } from '@emotion/react';
import MainContainer from './components/MainContainer/MainContainer';
import MainLayout from './components/MainLayout/MainLayout';
import { reset } from './styles/global';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { TfiPencilAlt } from "react-icons/tfi";
import { VscTrash } from "react-icons/vsc";
ReactModal.setAppElement("#root");
/** @JsxImportSource @emotion/react */

function App() {


    const [isModalOpen, setModalOpen] = useState(false);

    const [params, setParams] = useState({
        registerDate: "",
    })

    const [registerTodo, setRegisterTodo] = useState({
        content: "",
    });

    const [updateTodo, setUpdateTodo] = useState({
        todoId: "",
        checkStatus: "",
        content: "",
        registerDate: "",
    });

    const [todoList, setTodoList] = useState([]);


    // 조회

    const requestTodoList = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/v1/todolist", { params });
            setTodoList(response.data);
        } catch (e) {
            console.error(e);
        };
    }

    useEffect(() => {

        requestTodoList();
        console.log(params);

    }, [params]);

    const handleInputChange = (e) => {

        setParams(param => {
            return {
                ...param,
                [e.target.name]: e.target.value
            }
        });
    }

    const requestGetTodo = async (todoId) => {
        let responseData = null;
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/todo/${todoId}`);
            console.log(response);
            responseData = response.data;
        } catch (e) {
            console.error(e);
        }
        return responseData;
    }

    // 생성
    const handleRegisterInputChange = (e) => {
        setRegisterTodo(rt => {
            return {
                ...rt,
                [e.target.name]: e.target.value
            }
        });
    }


    const handleRegisterSubmitClick = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/v1/todo", registerTodo);
            if (response.status === 200) {
                alert("등록");
            }

        } catch (e) {
            console.error(e);
            alert("등록실패");
        }
        setRegisterTodo({
            content: ""
        });

        requestTodoList();
    }


    const handleEnter = (e) => {
        if (e.key === "Enter") {
            handleRegisterSubmitClick();
        }
    }

    // 삭제
    const requestDeleteList = async (todoId) => {

        let responseData = null;
        try {
            const response = await axios.delete(`http://localhost:8080/api/v1/todo/${todoId}`);
            responseData = response.data;
        } catch (e) {
            console.error(e);

        }
        return responseData;
    }

    const handleDeleteListClick = async (todoId) => {

        if (window.confirm("삭제하시겠습니까?")) {
            const deleteResult = await requestDeleteList(todoId);
            if (deleteResult) {
                await requestTodoList(); // 이 함수는 별도로 정의되어 있어야 합니다.
                alert("삭제 완료");
            } else {
                alert("삭제 실패");
            }
        }

        requestTodoList();
    }

    // 수정 

    const closeModal = () => {
        setModalOpen(false);
        setUpdateTodo({
            todoId: "",
            checkStatus: "",
            content: "",
            registerDate: "",
        })
    }

    const handleUpdateTodoClick = async (todoId) => {

        setModalOpen(true);
        const data = await requestGetTodo(todoId); // x
        setUpdateTodo(data);
    }


    const handleUpdateSubmitClick = async () => {
        await requestUpdateTodo();
        closeModal();
        requestTodoList();
    }

    const requestUpdateTodo = async () => {
        let responseData = null;

        try {
            const response = await axios.put(`http://localhost:8080/api/v1/todo/${updateTodo.todoId}`, updateTodo)
            responseData = response.data;
        } catch (e) {
            console.error(e);
        }
        return responseData;
    }

    const handleUpdateInputChange = (e) => {
        setUpdateTodo(ut => {
            return {
                ...ut,
                [e.target.name]: e.target.value
            };
        });
    }

    // 체크박스 상태 변경
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

        <>
            <Global css={reset} />

            <ReactModal
                style={{
                    content: {
                        boxSizing: "border-box",
                        transform: "translate(-50%, -50%)",
                        top: "50%",
                        left: "50%",
                        padding: "20px",
                        width: "570px",
                        height: "750px",
                        border: "3px solid #6a8ab1",
                        borderRadius: "10px",
                        backgroundColor: "#fafafa",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }
                }}
                isOpen={isModalOpen}
                onRequestClose={closeModal}>
                <div>
                    <h2
                        style={{
                            padding: "6px",
                            marginLeft: "30px",
                            borderBottom: "4px solid #D6E0F0",
                            marginLeft: "30px",
                            color: "#a3c2e5",
                            fontFamily: 'GangwonEduSaeeum_OTFMediumA',
                            fontSize: "60px",
                            textShadow: "1px 1px 0 #000000, 1px -1px 0 #000000, 1px -1px 0 #000000,-1px 1px 0 #000000",
                            alignItems: "center"
                        }}>todo 내용 수정</h2>
                    <div>
                        <input type="text" name="content" onChange={handleUpdateInputChange} value={updateTodo.content}
                        style={{
                            width: "450px",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "6px",
                            margin: "30px",
                            borderRadius: "10px",
                            border: "2px solid #6a8ab1",
                            color: "#a3c2e5",
                            fontFamily: 'GangwonEduSaeeum_OTFMediumA',
                            fontSize: " 50px"
                        }}     />
                        <input type="date" name="registerDate" onChange={handleUpdateInputChange} value={updateTodo.registerDate} 
                        style={{
                            width: "450px",
                            padding: "6px",
                            margin: "30px",
                            borderRadius: "10px",
                            border: "2px solid #6a8ab1",
                            color: "#a3c2e5",
                            fontFamily: 'GangwonEduSaeeum_OTFMediumA',
                            fontSize: " 50px"
                        }} />
                    </div>
                    <div>
                        <button onClick={handleUpdateSubmitClick}
                            style={{
                                width: "460px",
                                padding: "6px",
                                margin: "30px",
                                borderRadius: "10px",
                                border: "2px solid #6a8ab1",
                                color: "#a3c2e5",
                                fontFamily: 'GangwonEduSaeeum_OTFMediumA',
                                fontSize: " 50px"
                            }}>확인</button>
                    <button onClick={() => closeModal()}
                        style={{
                            width: "460px",
                            padding: "6px",
                            margin: "30px",
                            borderRadius: "10px",
                            border: "2px solid #6a8ab1",
                            color: "#a3c2e5",
                            fontFamily: 'GangwonEduSaeeum_OTFMediumA',
                            fontSize: " 50px"
                        }}>취소</button>
                </div>
            </div>
        </ReactModal >

            <MainLayout>
                <MainContainer>
                    <div className="container">
                        <h1 className='listtitle'>todolist</h1>
                        <div class="register-box">
                            <input type="text" className='submit-box' name='content' value={registerTodo.content}
                                onChange={handleRegisterInputChange} onKeyDown={handleEnter}
                                placeholder="To Do - List를 입력해주세요." />
                            <input type='month' name='registerDate' className='register-input' onChange={handleInputChange} />
                        </div>
                        {/* <p className="input-box">
                            <input type='month' name='registerDate' onChange={handleInputChange} />
                        </p> */}
                        <div className="list-container">
                            <div className="list">
                                <div className="sc-box">
                                    <h2>전체 List</h2>
                                </div>
                                <div >
                                    <table>
                                        <thead>
                                            <tr >
                                                <th>선택</th>
                                                <th>내용</th>
                                                <th>날짜</th>
                                                <th>삭제</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                todoList.map(todo =>
                                                    <tr key={todo.todoId}>
                                                        <input className='todo-check' type="checkbox" checked={!!todo.checkStatus} onChange={() => handleCheckedChange(todo.todoId)} value={todo.checkStatus} />
                                                        <td className='content'>{todo.content}</td>
                                                        <td className='date'>{todo.registerDate}</td>
                                                        {/* <td><button onClick={() => handleUpdateTodoClick(todo.todoId)}>수정</button></td> */}
                                                        <td><button onClick={() => handleDeleteListClick(todo.todoId)}><VscTrash /></button></td>
                                                    </tr>

                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div className="list">
                                <div className="sc-box">
                                    <h2>미완료 List</h2>
                                </div>
                                <div >
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

                                            {
                                                todoList.filter(todo => !todo.checkStatus).map(todo =>
                                                    <tr key={todo.todoId}>
                                                        <input className='todo-check' type="checkbox" checked={todo.checkStatus} onChange={() => handleCheckedChange(todo.todoId)} />
                                                        <td className='content'>{todo.content}</td>
                                                        <td className='date'>{todo.registerDate}</td>
                                                        <td><button onClick={() => handleUpdateTodoClick(todo.todoId)}><TfiPencilAlt /></button></td>
                                                        {/* <td><button onClick={() => handleDeleteListClick(todo.todoId)}>삭제</button></td> */}
                                                    </tr>

                                                )
                                            }

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div className="list">
                                <div className="sc-box">
                                    <h2>완료 List</h2>
                                </div>
                                <div >
                                    <table>
                                        <thead>
                                            <tr >
                                                <th>선택</th>
                                                <th>내용</th>
                                                <th>날짜</th>
                                                <th>삭제</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                todoList.filter(todo => !!todo.checkStatus).map(todo =>
                                                    <tr key={todo.todoId}>
                                                        <input type="checkbox" className='todo-check' checked={!!todo.checkStatus} onChange={() => handleCheckedChange(todo.todoId)} />
                                                        <td className='content'>{todo.content}</td>
                                                        <td className='date'>{todo.registerDate}</td>
                                                        {/* <td><button onClick={() => handleUpdateTodoClick(todo.todoId)}><TfiPencilAlt /></button></td> */}
                                                        <td><button onClick={() => handleDeleteListClick(todo.todoId)}><VscTrash /></button></td>
                                                    </tr>

                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>

                            </div>

                        </div>

                    </div>

                </MainContainer>

            </MainLayout>
        </>
    );
}

export default App;
