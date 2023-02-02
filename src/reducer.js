// A reducer is a function with 2 parameters, the current state and an Action.
// The job of the reducer is to return a new state based on the action
// import { bug_added, bug_removed } from "./actionTypes"; OR
import * as actions from "./actionTypes";
let lastId = 0;
export default function reducer(state = [], action) {
  if (action.type === actions.bug_added)
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type === actions.bug_removed)
    return state.filter((bug) => bug.id !== action.payload.id);
  return state;
}
