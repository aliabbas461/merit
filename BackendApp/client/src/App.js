import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Crud from "./Components/CRUD/Crud";
import CardDetails from "./Components/CRUD/CardDetails";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/crud" component={Crud} />
        <Route exact path="/cardDetails/:id" component={CardDetails} />
      </Router>
    </React.Fragment>
  );
}

export default App;
