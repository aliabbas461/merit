import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Crud from "./Components/CRUD/Crud";
import CardDetails from "./Components/CRUD/CardDetails";

const JWT = localStorage.getItem("jwtToken");

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/" component={JWT ? Crud : Login} />
        {JWT ? (
          <>
            <Route exact path="/crud" component={Crud} />
            <Route exact path="/cardDetails/:id" component={CardDetails} />{" "}
          </>
        ) : (
          <Route exact path="/register" component={Register} />
        )}
      </Router>
    </React.Fragment>
  );
}

export default App;
