import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{
    id: 1,
    text: "",
    editable: false,
  }]
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        editable: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    isEditable: (state, action) => {
      const { id, editable } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.editable = editable;
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo, isEditable } = todoSlice.actions;

export default todoSlice.reducer;
