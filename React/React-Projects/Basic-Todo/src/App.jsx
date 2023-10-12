import { useState } from "react"
import "./index.css"

function App() {
  const [input,setInput] = useState("");
  const [todos,setTodos] = useState([]);

  function handleSubmit(e){
    e.preventDefault();

    setTodos(currentTodos => {
      return [...currentTodos, {id: crypto.randomUUID(), title: input, completed: false}]
    })
    setInput("")
  }

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

  function deleteTodo(id){
    setTodos((currentTodos) => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className='bg-gray-800 w-full h-screen flex p-5 items-center flex-col gap-1'>
      <div className="w-full">
        <h1 className="text-center text-3xl text-white font-extrabold font-[poppins] my-8 ">TODO APP</h1>
        <form
          onSubmit={handleSubmit} 
          className="flex justify-center items-center">
          <input type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            className="py-3 w-full"/>
          <button className="bg-green-800 text-white px-5 py-3">Add</button>
        </form>
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-white text-2xl font-bold font-[poppins] m-8">My Todo List</h2>
          <ul className="text-white font-[poppins] space-y-3">
            {todos.length === 0 && "No Todos"}
            {todos.map((todo) => {
              return (
                <li key={todo.id} className="w-full space-x-8">
                  <label>
                    <input type="checkbox" checked={todo.completed}
                      onChange = {e => toggleTodo(todo.id, e.target.checked)}/> {todo.title}
                  </label>
                  <button
                    onClick={() => deleteTodo(todo.id)} 
                    className="px-5 bg-red-800 rounded-md">Delete</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
