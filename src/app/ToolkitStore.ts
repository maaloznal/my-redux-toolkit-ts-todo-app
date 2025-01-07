import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../toolkit/TodoSlice";
import filterReducer from "../features/todos/FilterReducerToolkit";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
