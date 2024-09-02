import React from 'react';
import { deleteTodo } from '../../apis/todoApi';
import { VscTrash } from 'react-icons/vsc';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function DeleteTodoButton({ todoId, requestTodoList }) {
    const handleDeleteClick = async (todoId) => {
        if (window.confirm("삭제하시겠습니까?")) {
            try {
                const response = await deleteTodo(todoId);
                if (response.status === 200) {
                    await requestTodoList();
                    alert("삭제 완료");
                }
            } catch (e) {
                console.error(e);
                alert("삭제 실패");
            }
        }
    };

    return (
        <button css={s.deleteButton} onClick={() => handleDeleteClick(todoId)}>
            <VscTrash />
        </button>
    );
};

export default DeleteTodoButton;
