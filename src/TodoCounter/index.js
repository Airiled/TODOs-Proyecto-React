import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoCounter.css'


function TodoCounter(  ){

    const {totalTodos, completedTodos} = React.useContext(TodoContext);

    return(
        <h1 className='TodoCounter'>Terminaste {completedTodos} de {totalTodos} tareas</h1>
    )
}

export { TodoCounter };