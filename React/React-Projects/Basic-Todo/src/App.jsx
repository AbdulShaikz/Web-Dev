import { useEffect, useState } from "react"
import "./index.css"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

function App() {

  const [todos,setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []

    return JSON.parse(localValue)
  });

  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }
         return todo
      })
    })
  }

  function addTodo(title){
    setTodos(currentTodos => {
      return [...currentTodos, {id: crypto.randomUUID(), title, completed: false},]
    })
  }

  function deleteTodo(id){
    setTodos((currentTodos) => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className='bg-gray-800 w-full h-screen flex p-5 items-center flex-col gap-1'>
      <div className="w-full">
        <h1 className="text-center text-3xl text-white font-extrabold font-[poppins] my-8 ">TODO APP</h1>
        <TodoForm onSubmit={addTodo}/>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      </div>
    </div>
  )
}

export default App
