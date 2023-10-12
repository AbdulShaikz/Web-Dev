import TodoItem from "./TodoItem";

function TodoList({todos, deleteTodo, toggleTodo}) {
    return (
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-white text-2xl font-bold font-[poppins] m-8">My Todo List</h2>
          <ul className="text-white font-[poppins] space-y-3">
            {todos.length === 0 && "No Todos"}
            {todos.map((todo) => {
              return (
                <TodoItem {...todo}
                    title = {todo.title}
                    key ={todo.id}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}/>
              )
            })}
          </ul>
        </div>
    );
}

export default TodoList;