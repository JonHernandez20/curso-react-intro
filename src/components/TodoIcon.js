import React from 'react';
import { ReactComponent as CheckSVG } from '../check.svg';
import { ReactComponent as DeleteSVG } from '../delete.svg';

const itemsTodos = {
    'delete': <DeleteSVG/>,
    'check': <CheckSVG/>,
}

const TodoIcon = ({ type }) => {
    return (
        <span 
            className={`Icon Icon-type-${type}`}
        >
            { itemsTodos[type] }
        </span>
    );
}

export { TodoIcon };
 