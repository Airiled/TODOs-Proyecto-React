import React from 'react'
import './CreateTodoButton.css'


function CreateTodoButton(props){
    const addNewTodo = () =>{
        props.setToggleModal(!props.toggleModal);
    }

    return(
        <button 
        className='CreateTodoButton'
        onClick={addNewTodo}
        >+</button>
    )
}

export { CreateTodoButton };
