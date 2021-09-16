import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>

        <Route path="/sign-up">
          <SignUp />
        </Route>

        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
