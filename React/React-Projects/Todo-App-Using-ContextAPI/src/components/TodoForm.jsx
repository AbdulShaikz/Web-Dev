import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
    const [msg, setMsg] = useState("");
    const {addTodo} = useTodo();
    
    const add = (e) => {
        e.preventDefault()
        if(msg==="") return 

        addTodo({msg, completed: false});
        setMsg("")
        // console.log(input);
    }

    return (
        <div className="flex justify-center bg-gray-500/30 rounded-lg p-8 m-5 w-full">
            <form
              onSubmit={add}
              className='w-full flex justify-center items-center m-5'>
                <input 
                type="text" 
                className='w-full h-full p-3'
                value={msg}
                onChange={(e)=>setMsg(e.target.value)} />
                <button type="submit" className='bg-purple-800 text-white p-3'>Add</button>
            </form>
        </div>
    );
}

export default TodoForm;