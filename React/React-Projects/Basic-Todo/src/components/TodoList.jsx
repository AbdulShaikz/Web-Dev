function TodoList() {
    return (
        <div className="text-white">
            <form className="flex gap-1 items-center">
                <input type="checkbox" />
                <button
                className="bg-blue-800 p-3">Edit</button>
                <button
                className="bg-red-800 p-3">Delete</button>
            </form>
        </div>
    );
}

export default TodoList;