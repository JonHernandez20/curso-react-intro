const Search = () => {
    return(
        <input placeholder="Nuevo TODO" 
        onChange={ (event) => {
            console.log(event.target.value);
        } }
        type="text"/>
    );
}

export { Search };