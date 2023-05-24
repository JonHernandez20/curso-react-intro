import React from 'react';
import { TodoIcon } from './TodoIcon.js'

const CompleteIcon = ({ completed, onComplete }) => {
    return (
        <TodoIcon 
            type = "check"
            color = { completed ? '#fff' : 'gray' }
            completed={ completed }
            onClick = { onComplete }
        />
    );
}

export { CompleteIcon };
