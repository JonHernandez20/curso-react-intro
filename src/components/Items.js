import React from 'react';
import '../styles/Items.css';

const Items = (props) => {
    return(
        <li className={`container__todo ${ props.finished &&  "container__completed" }`}>
            <span className={`todoChecked ${ props.finished && 'p__completed' }`} 
            onClick={props.onComplete}
            >V</span>
            <p className={`${ props.finished && 'p__completed' }`}>{props.text}</p>
            <span className={`todoUnchecked`}
            onClick={ props.onDelete }
            >X</span>
        </li>
    );
}

export { Items };
