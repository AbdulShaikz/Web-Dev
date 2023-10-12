function TodoItem({ completed, id, title, toggleTodo, deleteTodo}) {
  return (
    <li key={id} className="w-full space-x-8">
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />{" "}
        {title}
      </label>
      <button
        onClick={() => deleteTodo(id)}
        className="px-5 bg-red-800 rounded-md"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
