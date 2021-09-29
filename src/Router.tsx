import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import * as routes from "constants/routes";
import Landing from "components/Landing";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.LANDING} component={Landing} />
        <Redirect to={routes.LANDING} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
