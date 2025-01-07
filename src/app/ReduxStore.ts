import { combineReducers, createStore, Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { TodoAction } from "../types/TodoAction";
import { todoReducer } from "../features/todos/todoReducer";
import { FilterAction, filterReducer } from "../features/todos/FilterReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});

export type AppDispatch = Dispatch<RootAction>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootAction = TodoAction | FilterAction;
export type RootState = ReturnType<typeof store.getState>;

const store = createStore(rootReducer);
export default store;
