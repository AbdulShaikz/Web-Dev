import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id: Date.now(),
            title: "todo title",
            completed: false,
        }
    ],
    addTodo: (id,todo) => {},
    onToggleComplete: () => {},
    onDelete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}