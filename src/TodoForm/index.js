import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoButtonsDiv.css'
import './TodoFormDiv.css'
import './TodoTextArea.css'
import './TodoTittle.css'
import './TodoFormButton.css'


function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setToggleModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setToggleModal();
      };
    

    const onSubmit = (event) => {
        event.preventDefault();

        addTodo(newTodoValue);

        setToggleModal();
        //Reset form
        setNewTodoValue('')
    }

    return(
        <form 
        onSubmit={onSubmit}
        className='TodoFormDiv'
        >
            <label className='TodoTittle'>Write your new TODO</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder='Write yout TODO..-'
                className='TodoTextArea'
            />
            <div className='TodoButtonsDiv'>
                <button
                type='submit'
                className='TodoFormButton'
                >
                Agree
                </button>
                <button 
                type='button'
                onClick={onCancel}
                className='TodoFormButton'
                >
                Cancel
                </button>
                
            </div>
        </form>
    )
}

export { TodoForm }