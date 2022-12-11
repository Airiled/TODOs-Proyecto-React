import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoSearch.css'


function TodoSearch(){

    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchTodoValue = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return(
        <input  
            className='TodoSearch' 
            placeholder="Buscar su tarea"
            value={searchValue}
            onChange={onSearchTodoValue} 
        />
    )
}

export { TodoSearch };
