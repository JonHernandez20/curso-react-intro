import React from 'react';
import { TodoIcon } from './TodoIcon.js'

const DeleteIcon = ({ onDelete }) => {
    return (
        <TodoIcon 
            type = "delete"
            color = "#bfbfbf"
            onClick={ onDelete }
        />
    );
}

export { DeleteIcon };
