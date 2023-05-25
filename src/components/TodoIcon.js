import React from 'react';
import '../styles/TodoIcon.css';
import { ReactComponent as CheckSVG } from '../svg/check.svg';
import { ReactComponent as DeleteSVG } from '../svg/delete.svg';

const itemsTodos = {
    'delete': (color) => <DeleteSVG className='Icon-svg' fill={ color } />,
    'check': (color) => <CheckSVG className='Icon-svg' fill={ color } />,
}

const TodoIcon = ({ type, color, completed, onClick }) => {
    return (
        <span 
            className={`Icon-container Icon-type-${type} ${completed && "Icon-completed"}`}
            onClick = { onClick }
        >
            { itemsTodos[type](color) }
        </span>
    );
}

export { TodoIcon };
 