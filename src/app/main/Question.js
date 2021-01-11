import React, { useEffect } from "react";
import { Fragment } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { routesTrivia } from "../routes";

import { setAnswer } from "../store/actions/trivia.actions";

function Question() {
  /* Hooks */
  const history = useHistory();
  const dispatch = useDispatch();
  const { question } = useParams();
  /* Selectors */
  const { items } = useSelector(({ trivia }) => trivia);
  /* Constants */
  /* States */
  const [questionDetails, setQuestionDetails] = React.useState(null);
  /* useEffects */
  useEffect(() => {
    //verify if the question exists
    if (question >= items.length) history.push(routesTrivia.results);
    //get question from items
    const item = items[question];
    //set actual question
    setQuestionDetails(item);
  }, [question, history, items]);

  /* Handlers */
  const handleSubmit = async (answer) => {
    //submit new text
    const result = await dispatch(setAnswer(questionDetails, answer));
    //validate result
    if (result.valid) {
      //create a new url, actual question + 1
      const url = `${routesTrivia.questions}/${+question + 1}`;
      //change to new question
      history.push(url);
    }
  };
  /* Props */

  const propsBtnFalse = {
    onClick: () => handleSubmit("false"),
  };
  const propsBtnTrue = {
    onClick: () => handleSubmit("true"),
  };

  return questionDetails ? (
    <Fragment>
      <h2>{questionDetails.category}</h2>
      <h5>{questionDetails.question}</h5>
      <Row className="justify-content-center">
        <button className="btn btn-success m-2 p-2 col-lg-3" {...propsBtnFalse}>
          FALSE
        </button>
        <button className="btn btn-primary m-2 p-2 col-lg-3" {...propsBtnTrue}>
          TRUE
        </button>
      </Row>
    </Fragment>
  ) : (
    <div />
  );
}
export default Question;
