import TodoItems from "./TodoItems";

function TodoList() {
    return (
        <div className="flex justify-center bg-gray-500/30 rounded-lg p-8 m-5 w-full">
            <TodoItems/>
        </div>
    );
}

export default TodoList;