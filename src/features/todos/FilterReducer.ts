export type FilterAction = {
  type: "SET_FILTER";
  payload: "all" | "completed" | "incomplete";
};

export interface FilterState  {
  filter: "all" | "completed" | "incomplete";
};

 const initialState: FilterState = {
  filter: "all",
};

export function filterReducer(state = initialState, action: FilterAction): FilterState {
  switch (action.type) {
    case "SET_FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
