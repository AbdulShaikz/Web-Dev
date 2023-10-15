// TodoList.jsx

import { useSelector, useDispatch } from 'react-redux';
import { editTodo, removeTodo, isEditable } from '../features/todo/todoSlice';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className='text-white'>Todos</div>
      <ul className='list-none text-white space-x-8'>
        {todos &&
          todos.map((todo) => (
            <li
              className='mt-4 flex gap-8 text-black justify-between items-center bg-zinc-800 px-4 py-2 rounded'
              key={todo.id}
            >
              {todo.editable ? (
                <input
                  type='text'
                  value={todo.text}
                  onChange={(e) => {
                    dispatch(editTodo({ id: todo.id, text: e.target.value }));
                  }}
                />
              ) : (
                <div className='text-white'>{todo.text}</div>
              )}

              {todo.editable ? (
                <button
                  onClick={() => {
                    dispatch(isEditable({ id: todo.id, editable: false }));
                  }}
                  className='text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md'
                >
                  Update
                </button>
              ) : (
                <button
                  onClick={() => {
                    dispatch(isEditable({ id: todo.id, editable: true }));
                  }}
                  className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover-bg-red-600 rounded text-md'
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default TodoList;
