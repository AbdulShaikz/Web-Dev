import { useState } from "react";
import {useDispatch} from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function TodoInput() {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    
    function submitHandler(e){
        e.preventDefault();
        dispatch(addTodo(input))
        setInput("")
    }

    return (
        <div className="flex flex-col m-8 w-full gap-8">
            <form onSubmit={submitHandler} className="flex flex-col items-center gap-8">
                <input 
                    type="text" 
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    className="p-8 w-full focus:outline-none focus: outline-blue-800 outline-8" />
                <button className="bg-green-800 p-8 w-full text-white text-3xl">Add</button>
            </form>
        </div>
    );
}

export default TodoInput;