/** @jsxImportSource @emotion/react */
import * as s from './style';
import React from 'react';
import { TfiPencilAlt } from 'react-icons/tfi';

function UpdateTodoButton({ todoId, handleUpdateTodoClick }) {
    return (

        <button css={s.updateButton} onClick={() => handleUpdateTodoClick(todoId)}>
            <TfiPencilAlt />
        </button>

    );
}

export default UpdateTodoButton;