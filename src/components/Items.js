import React from 'react';
import '../styles/Items.css';

const Items = ({ info }) => {
    return(
        <li>
            <div className='container__todo'>
                <span className='todoChecked' >V</span>
                <p>{info}</p>
                <span>X</span>
            </div>
        </li>
    );
}

export { Items };
