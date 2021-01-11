import { Route, Switch } from "react-router-dom";
import Layout from "../../@components/Layout/Layout";
import { routesTrivia } from "../routes";
import Intro from "./Intro";
import Question from "./Question";
import Result from "./Result";

function App() {  

  return (
    <Layout
      metaContent={
        <Switch>
          <Route exact path={routesTrivia.intro} component={Intro} />
          <Route exact path={routesTrivia.question} component={Question} />
          <Route exact path={routesTrivia.results} component={Result} />
        </Switch>
      }
    ></Layout>
  );
}
export default App;
