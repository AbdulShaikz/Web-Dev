
import { useState } from 'react';
import TodoForm from './components/TodoForm'
import { TodoProvider } from './contexts';
import TodoList from './components/TodoList';


function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) =>{
    setTodos((prevTodos) => [{id: crypto.randomUUID(), ...todo}, ...prevTodos]
    );
  }

  const removeTodo = (id) =>{
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id!==id)
    );
  }

  const updateTodo = (id, todo) =>{
    setTodos((prevTodos) => prevTodos.map((prevTodo) => (prevTodo.id === id? todo : prevTodo)
    ));
  }

  return (
    <TodoProvider value={{todos, addTodo, removeTodo, updateTodo}}>
      <div className='w-full h-screen bg-gray-800 flex flex-col items-center'>
        <h1 className='text-3xl m-3 font-bold font-[Josefin] uppercase text-orange-500'>Todo</h1>
        <TodoForm/>
        <h2 className='text-3xl m-3 font-bold font-[Josefin] uppercase text-white'>My Todo List</h2>
        <TodoList/> 
      </div>
    </TodoProvider>
  )
}

export default App;
