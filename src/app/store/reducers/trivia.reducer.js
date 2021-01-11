import * as Actions from "../actions/trivia.actions";
import { questionInterface } from "../../models";

const initialState = {
  items: [],
  results: [],
  ready: false,
};

const triviaReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.SET_QUIZZES: {
      //add results to list
      const items = (action.payload.results || []).map((item) =>
        questionInterface(item)
      );
      //change flag to true
      const ready = true;
      //update state
      return {
        ...state,
        items,
        ready,
        results: [],
      };
    }
    case Actions.SAVED_ANSWER: {
      //add results to list
      const results = [...state.results, questionInterface(action.payload)];
      //update state
      return {
        ...state,
        results,
      };
    }
    default: {
      return state;
    }
  }
};

export default triviaReducer;
