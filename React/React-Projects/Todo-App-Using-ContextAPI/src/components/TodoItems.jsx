import { useTodo } from "../contexts";

function TodoItems() {
    const {todos, removeTodo, updateTodo} = useTodo();


    // console.log(todos);
  return (
    <form  className='w-full text-white flex flex-col justify-center items-center m-5'>
    {todos.length==0 && "No Todos"}
    {todos && todos.map((todo)=>{
        console.log(todo.msg);
        return(
            <div key={todo.id} className="flex justify-between bg-white p-3 space-x-5 w-full flex-wrap border-b-2">
                <input type="checkbox" id="todo-item" className="shrink" />
                <label htmlFor="todo-item" className="grow text-black">
                    {todo.msg}
                    
                </label>
                <div className="space-x-3 shrink">
                    <button onClick= {()=>updateTodo(todo.id, todo.msg)} className="">📝</button>
                    <button onClick= {()=>removeTodo(todo.id)} className="">❌</button>
                </div>
            </div>
        );
    })}
    </form>
  );
}

export default TodoItems;
