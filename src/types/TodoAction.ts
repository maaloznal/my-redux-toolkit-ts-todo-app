export type TodoAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOOGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };
