import React from 'react'

const Search = () => {

    const [ todoValue, setTodoValue ] = React.useState('');
    console.log(todoValue);

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