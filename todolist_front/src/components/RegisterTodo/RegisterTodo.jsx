import React, { useEffect, useState } from 'react';
import { addTodo } from '../../apis/todoApi';

function RegisterTodo({ setParams, requestTodoList}) {

    const [registerTodo, setRegisterTodo] = useState({
        content: "",
    });


    const handleInputChange = (e) => {

        setParams(param => {
            return {
                ...param,
                [e.target.name]: e.target.value
            }
        });
    }

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
            const response = await addTodo(registerTodo);
            
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
        
        await requestTodoList();
    }

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            handleRegisterSubmitClick();
        }
    }
    return (

        <div class="register-box">
            <input type="text" className='submit-box' name='content' value={registerTodo.content}
                onChange={handleRegisterInputChange} onKeyDown={handleEnter}
                placeholder="To Do - List를 입력해주세요." />
            <input type='month' name='registerDate' className='register-input' onChange={handleInputChange} />
        </div>

    );
}

export default RegisterTodo;