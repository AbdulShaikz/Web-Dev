import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  caches
  return (
   <div className="bg-gray-800 flex flex-col items-center justify-start p-8 w-screen h-screen">
    <h1 className="text-3xl text-white">Todo Using Redux</h1>
    <TodoInput/>
    <TodoList/>
   </div>
  )
}

export default App
