import React from 'react'
import '../styles/Search.css';

const Search = ({ todoValue, setTodoValue }) => {

    return(
        <input placeholder="Nuevo TODO" 
        value = { todoValue }
        onChange={ (event) => {
            setTodoValue(event.target.value);
        } }
        type="text"/>
    );
}

export { Search };