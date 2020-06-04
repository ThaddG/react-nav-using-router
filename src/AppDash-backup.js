import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from './components/Dashboard/Dashboard.js';
import Events from './components/Dash-comp/Events/Events';
import Main from './components/Main/Main.js';

const props = {
  user: "ShaZam",
  headerTitle: "Dashboard",
};

const App = () => {

  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/dashboard" component={() => <Dashboard data={props} />} />
          {/* <Route exact path="/dashboard/:comp" component={() => <Dashboard data={props} />} /> */}
        </Switch>
    </Router>
  );

};

export default App;
