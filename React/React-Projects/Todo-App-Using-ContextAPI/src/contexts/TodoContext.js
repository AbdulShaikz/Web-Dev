import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            msg:"Task",
            completed: false, 
        }
    ],
    addTodo: () => {},
    removeTodo: () => {},
    updateTodo: () => {},
    onToggle: () => {},
});

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider;
