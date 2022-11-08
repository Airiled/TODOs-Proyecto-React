// import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';

const todos = [
  {text: 'Cortar ajo', completed: false},
  {text: 'Ir al gym', completed: false},
  {text: 'Limpiar la casa', completed: false},
  {text: 'iR A COMPRARRRR', completed: false}
]

function App() {
  return (
  <div>
    <TodoCounter />
    <TodoSearch />
    <TodoList>
      {todos.map(todo => (
      <TodoItem text={todo.text}/>
      ))}
    </TodoList>
    <CreateTodoButton />
  </div>
  );
}

export default App;
