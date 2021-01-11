import React, { useEffect } from "react";
import { Fragment } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import RowResult from "../../@components/Results/Row";
import { routesTrivia } from "../routes";

function Result() {
  /* Hooks */
  const history = useHistory();
  /* Selectors */
  const { results } = useSelector(({ trivia }) => trivia);
  /* Constants */
  /* States */
  const [score, setScore] = React.useState(0);
  /* useEffects */
  useEffect(() => {
    //verify if has results
    if (!results.length) history.push(routesTrivia.intro);
    //get score
    const score = results.filter((result) => result.isCorrect).length;
    //set score
    setScore(score);
  }, [results, history]);
  /* Handlers */
  /* Props */
  const propsBtnBegin = {
    onClick: () => history.push(routesTrivia.intro),
  };

  return (
    <Fragment>
      <h2>You scored</h2>
      <p>{`${score}/${results.length}`}</p>
      <Table>
        <tbody>
          {results.map((result) => (
            <RowResult text={result.question} isCorrect={result.isCorrect} />
          ))}
        </tbody>
      </Table>
      <button className="btn btn-primary my-2 my-sm-0" {...propsBtnBegin}>
        Play again?
      </button>
    </Fragment>
  );
}
export default Result;
