import React from 'react'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm';
import { TodosEmpty } from '../TodosEmpty';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';


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
        {error && <TodosError />}
        {loading && <TodosLoading />}
        {(!loading && !filterTodos.length) && <TodosEmpty />}
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