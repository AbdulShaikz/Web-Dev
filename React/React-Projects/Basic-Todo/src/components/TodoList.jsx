function TodoList() {
    return (
        <div className="text-black w-full">
            <form className="flex gap-1 items-center">
                <input type="checkbox" />
                <input type="text" className="p-3" disabled={true} />
                <button
                className="bg-blue-800 p-3">Edit</button>
                <button
                className="bg-red-800 p-3">Delete</button>
            </form>
        </div>
    );
}

export default TodoList;