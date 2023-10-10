import { useState } from 'react'
import TodoForm from './components/TodoForm'
import './index.css'
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className='bg-gray-800 w-full h-screen flex p-5 items-center flex-col gap-1'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-white text-3xl text-center font-bold font-[raleway]'>Manage your Todos</h1>
        <TodoForm/>
        <TodoList/>
      </div>
    </div>
  )
}

export default App
