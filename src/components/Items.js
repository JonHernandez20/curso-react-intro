import React from 'react';
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import '../styles/Items.css';

const Items = (props) => {
    return(
        <li className={`container__todo ${ props.finished &&  "container__completed" }`}>
            <CompleteIcon 
                completed={ props.finished }
                onComplete = { props.onComplete }
            />
            <p className={`${ props.finished && 'p__completed' }`}>{props.text}</p>
            <DeleteIcon 
                onDelete={ props.onDelete }
            />
        </li>
    );
}

export { Items };
