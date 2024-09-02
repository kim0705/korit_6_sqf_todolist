import React from 'react';
import { TfiPencilAlt } from 'react-icons/tfi';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function UpdateTodoButton({todoId, handleUpdateTodoClick}) {
    return (

        <button css={s.updateButton} onClick={() => handleUpdateTodoClick(todoId)}>
            <TfiPencilAlt />
        </button>

    );
}

export default UpdateTodoButton;