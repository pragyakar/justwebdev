import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import * as routes from "constants/routes";
import Home from "components/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.LANDING} component={Home} />
        <Redirect to={routes.LANDING} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
