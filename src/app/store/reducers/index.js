import { combineReducers } from "redux";
import trivia from "./trivia.reducer";

const createReducer = (asyncReducers) =>
  combineReducers({
    trivia,
    ...asyncReducers,
  });

export default createReducer;
