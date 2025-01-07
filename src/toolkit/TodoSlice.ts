import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CombinedState, Todo } from "../types/todoState";

const initialState: CombinedState = {
  todos: [],
  filter: "all",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setFilter: (state, action: PayloadAction<"all" | "completed" | "incomplete">) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, removeTask, toggleTask, setFilter } = todoSlice.actions;
export default todoSlice.reducer;