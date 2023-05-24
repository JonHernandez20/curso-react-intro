import React from 'react';
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import '../styles/Items.css';

const Items = (props) => {
    return(
        <li className={`container__todo ${ props.finished &&  "container__completed" }`}>
            {/* <span className={`Icon Icon-type-check ${ props.finished && 'p__completed' }`} 
            onClick={props.onComplete}
            >V</span> */}

            <CompleteIcon />
            <p className={`${ props.finished && 'p__completed' }`}>{props.text}</p>
            <DeleteIcon />
            {/* <span className={`Icon Icon-type-delete`}
            onClick={ props.onDelete }
            >X</span> */}
        </li>
    );
}

export { Items };
