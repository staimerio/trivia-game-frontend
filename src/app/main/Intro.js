import { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { routesTrivia } from "../../app/routes";

import { getQuizzes } from "../store/actions/trivia.actions";

function Intro() {
  /* Hooks */
  const history = useHistory();
  const dispatch = useDispatch();
  /* Selectors */
  const { ready } = useSelector(({ trivia }) => trivia);
  /* Constants */
  const totalQuestions = 10;
  /* States */

  /* useEffects */
  /**Fetch data */
  useEffect(() => {
    dispatch(getQuizzes({ amount: totalQuestions }));
  }, [dispatch]);

  /* Handlers */
  /* Props */

  const propsBtnBegin = {
    onClick: () => history.push(routesTrivia.initialQuestion),
    disabled: !ready,
  };

  return (
    <Fragment>
      <h2>Welcome to the Question Challenge!</h2>
      <h5>
        You will be presented with {totalQuestions} True or False questions.
      </h5>
      <p>Can you score 100%?</p>
      <button className="btn btn-primary my-2 my-sm-0" {...propsBtnBegin}>
        Begin
      </button>
    </Fragment>
  );
}
export default Intro;
