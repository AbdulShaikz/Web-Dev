import { useState } from "react";
import {useTodo} from '../context/TodoContext';

function TodoForm() {
    const [input, setInput] = useState();
    const context = useTodo();

    const addTodo = () =>{
        
    }
    return (
        <form onSubmit= {addTodo} className="flex m-8 w-full">
            <input 
            className="text-black w-full"
            type="text"  
            value ={ input}
            onChange = {(e) =>{setInput(e.target.value)}}            
            />
            <button
            className="text-white bg-green-800 p-5">Add</button>
        </form>
    );
}

export default TodoForm;