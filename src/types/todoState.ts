import { FilterState } from "../features/todos/FilterReducer";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[]
}

export interface CombinedState extends TodoState, FilterState {}