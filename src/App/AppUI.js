import React from 'react'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm';


function AppUI(){
    const {
        error,
        loading,
        completeTodo,
        filterTodos,
        deleteTodo,
        toggleModal,
        setToggleModal,
    } = React.useContext(TodoContext);

    return(
    <div>
        <TodoCounter />
        <TodoSearch  />
        <TodoList>
        {error && <p>¡Error!</p>}
        {loading && <p>Estamos cargando..</p>}
        {(!loading && !filterTodos.length) && <p>Create new TODO</p>}
        {filterTodos.map(todo => (
        <TodoItem
        key={todo.text} 
        text = {todo.text}
        completed={todo.completed}
        todoCompleted = {() => completeTodo(todo.text)}
        todoDeleted = {()=> deleteTodo(todo.text)}
        />
        ))}
        </TodoList>

        {toggleModal && (
        <Modal>
            <TodoForm />
        </Modal>
        )}

        <CreateTodoButton 
            toggleModal={toggleModal}
            setToggleModal={setToggleModal}
        />
    </div>
    )
}

export { AppUI };