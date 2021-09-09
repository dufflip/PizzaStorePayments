// import {}
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * Importar as rotas
 */

import Login from "./Login";
import Home from "./Home";
import Header from "../components/Header";

import FirstStep from "../components/payments/FirstStep";
import SecondStep from "../components/payments/SecondStep";
import ThirdStep from "../components/payments/ThirdStep";
import FourthStep from "../components/payments/FourthStep";
import FinalStep from "../components/payments/FinalStep";

// import "../css/index.css";

const Routes = () => {
  const isLogged = useSelector((state) => state.login.email);

  return (
    <Router>
      <Switch>
        {isLogged ? (
          <>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/first-step" exact component={FirstStep} />
            <Route path="/second-step" exact component={SecondStep} />
            <Route path="/third-step" exact component={ThirdStep} />
            <Route path="/fourth-step" exact component={FourthStep} />
            <Route path="/final-step" exact component={FinalStep} />
          </>
        ) : (
          <Route path="/" exact component={Login} />
        )}
      </Switch>
    </Router>
  );
};

export default Routes;
