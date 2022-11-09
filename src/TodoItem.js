import React from 'react'
import './TodoItem.css'
import './TodoComplete.css'
import './TodoActive.css'


function TodoItem(props){
    return(
        <li className='TodoItem'>
            <span className='TodoComplete'>
                ✔
            </span>
            <p>
                {props.text}
            </p>
            <span className='TodoActive'>
                X
            </span>
        </li>
    )
}

export { TodoItem };
