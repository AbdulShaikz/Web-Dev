import { useState } from "react";

function TodoForm({onSubmit}) {
    const [input,setInput] = useState("");
    
    function handleSubmit(e){
        e.preventDefault();
        if(input==="") return 

        onSubmit(input)

        setInput("")
    }

    return (
        <form
          onSubmit={handleSubmit} 
          className="flex justify-center items-center">
          <input type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            className="py-3 w-full"/>
          <button className="bg-green-800 text-white px-5 py-3">Add</button>
        </form>
    );
}

export default TodoForm;