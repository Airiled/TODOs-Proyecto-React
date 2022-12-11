import React from 'react'
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
// Recibimos como parámetros el nombre y el estado inicial de nuestro item.
function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
