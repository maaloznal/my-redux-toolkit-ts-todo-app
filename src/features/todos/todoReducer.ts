import { Todo, TodoState } from "../../types/todoState";
import { TodoAction } from "../../types/TodoAction";

const initialState: TodoState = {
  todos: [],
};

export function todoReducer(state = initialState, action: TodoAction): TodoState {
  switch (action.type) {
    case "ADD_TODO":
      { const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      return { ...state, todos: [...state.todos, newTodo] }; }
    case "TOOGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}
