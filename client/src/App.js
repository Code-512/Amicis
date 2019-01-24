import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import PlanTrip from "./pages/PlanTrip";
import Results from "./pages/Results";
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
      <Nav />
      <Switch>
      <Route path="/Login" exact component={Login} />
      <Route path="/registration" exact component={Registration} />
      <Route exact path="/" component={Home} />
      <Route exact path="/plan" component={PlanTrip} />
      <Route exact path="/results" component={Results} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/books/:id" component={Detail} />
      <Route component={NoMatch} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
