import { OpentdbServices } from "../../services/opentdbServices";
const axios = require("axios");

/* ACTIONS */
export const GET_QUIZZES = "[TRIVIA] GET_QUIZZES";
export const SET_QUIZZES = "[TRIVIA] SET_QUIZZES";
export const GET_QUIZZES_ERROR = "[TRIVIA] GET_QUIZZES_ERROR";

export const SAVE_ANSWER = "[TRIVIA] SAVE_ANSWER";
export const SAVED_ANSWER = "[TRIVIA] SAVED_ANSWER";
export const SAVE_ANSWER_ERROR = "[TRIVIA] SAVE_ANSWER_ERROR";

/**
 * URLs
 */
const urlTrivia = `${OpentdbServices.baseURL}${OpentdbServices.trivia}`;

/***************************************************************************
 * SERVICES
 **************************************************************************/
/**
 * Get quizzes from API request
 * @param {*} params
 */
export function getQuizzes({
  amount = 10,
  difficulty = "hard",
  type = "boolean",
} = {}) {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_QUIZZES,
      });
      //set url
      const url = `${urlTrivia}`;
      //set params
      const params = {
        amount,
        difficulty,
        type,
      };
      //fetch quizzes
      const reqResult = await axios.get(url, { params });
      //validate if there is any error
      if (reqResult.status !== 200) throw new Error(reqResult.data.error);
      //save items to redux
      dispatch({
        type: SET_QUIZZES,
        payload: reqResult.data,
      });
      //return object to client
      return {
        valid: true,
      };
    } catch (error) {
      alert(error.message);
      dispatch({
        type: GET_QUIZZES_ERROR,
      });
      //return error to client
      return {
        valid: false,
      };
    }
  };
}
export function setAnswer(question, answer) {
  return async (dispatch) => {
    try {
      dispatch({
        type: SAVE_ANSWER,
      });
      //validate answer
      const isCorrect = question.correct_answer === answer;
      //save items to redux
      dispatch({
        type: SAVED_ANSWER,
        payload: {
          ...question,
          isCorrect,
        },
      });
      //return object to client
      return {
        valid: true,
      };
    } catch (error) {
      alert(error.message);
      dispatch({
        type: SAVE_ANSWER_ERROR,
      });
      //return error to client
      return {
        valid: false,
      };
    }
  };
}
