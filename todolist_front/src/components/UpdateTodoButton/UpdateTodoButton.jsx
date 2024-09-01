import React from 'react';
import { TfiPencilAlt } from 'react-icons/tfi';

function UpdateTodoButton({todoId, handleUpdateTodoClick}) {
    return (

        <button onClick={() => handleUpdateTodoClick(todoId)}>
            <TfiPencilAlt />
        </button>

    );
}

export default UpdateTodoButton;