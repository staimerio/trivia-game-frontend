import { HashRouter as Router, Route } from "react-router-dom";
import Provider from "react-redux/es/components/Provider";
import { routesTrivia } from "./routes";
import store from "./store";
import Home from "./main/Home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact={false} path={routesTrivia.intro}>
          <Home />
        </Route>
      </Router>
    </Provider>
  );
}
export default App;
