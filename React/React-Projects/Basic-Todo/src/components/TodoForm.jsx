function TodoForm() {
    return (
        <form className="flex m-8 w-full">
            <input 
            className="text-black w-full"
            type="text"  
            />
            <button
            className="text-white bg-green-800 p-5">Add</button>
        </form>
    );
}

export default TodoForm;