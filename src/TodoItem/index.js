import React from 'react'
import './TodoItem.css'
import './TodoComplete.css'
import './TodoDelete.css'
import './TodoText.css'
import './TodoFinished.css'
import './TodoTextCompleted.css'


function TodoItem(props){
    return(

        <li className='TodoItem'>
            <span 
            className='TodoDelete'
            onClick={props.todoDeleted}
            >
                X
            </span>
            <p className={`TodoText ${props.completed && 'TodoTextCompleted'}`}>
                {props.text}
            </p>
            <span 
            className={`TodoComplete ${props.completed && 'TodoFinished'}`}
            onClick={props.todoCompleted}
            >
                ✔
            </span>
        </li>
    )
}

export { TodoItem };
