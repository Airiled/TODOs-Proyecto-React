import React from 'react';
import { useLocalStorage } from './useLocalStorage'

const TodoContext = React.createContext();

function TodoProvider(props){
  const {
      item: todos, 
      saveItem: saveTodos,  
      loading,
      error,
    } = useLocalStorage('TODOS_V1', []); 
    const [searchValue, setSearchValue] = React.useState('');
  
    const completedTodos = todos.filter(todo => todo.completed).length
    const totalTodos =  todos.length; 
  
    let filterTodos = []
    
  
    if(!searchValue.length >= 1){
        filterTodos = todos;
    }else{
        filterTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const todoSearch = searchValue.toLowerCase();
        return todoText.includes(todoSearch);
      });
    }
  
    const completeTodo = (text) => {
      const indexTodo = todos.findIndex(todo => todo.text === text);
      const newTodo = [...todos];
      if(!newTodo[indexTodo].completed) newTodo[indexTodo].completed = true;
      else{
        newTodo[indexTodo].completed = false;
      }
      saveTodos(newTodo);
    }
  
    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        completed: false,
        text,
      });
      saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
      let newTodo = [...todos];
      newTodo = todos.filter(todo => todo.text !== text);
      saveTodos(newTodo);
    }

    const [toggleModal, setToggleModal] = React.useState(false);
      
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            filterTodos,
            completeTodo,
            addTodo,
            deleteTodo,
            toggleModal,
            setToggleModal,
        }}>
          {props.children}
        </TodoContext.Provider>
    )
}

// Exportamos nuestro proveedor y nuestro contexto, en el context también esta el consumer, para acceder a nuestro contexto
export { TodoContext, TodoProvider };