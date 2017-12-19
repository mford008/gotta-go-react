import React, { Component } from "react";
pagesimport React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from "../../components/Button";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";

class Start extends Component {
  switchPage = () => {
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>;
  }
  
  render() {
    return (
        <div className="has-text-centered">
          <div className="has-text-centered">
            <img className="start-logo" src="./public/transp-gotta-go.png" alt="Gotta Go">
          </div>

          <div className="intro" class="has-text-centered">
            <p><strong>Log in/Sign up</strong> to be able comment, save favorite places and add new locations.</p>
            <p> Or just use it for searching without registration.</p>
          </div>

        <Button onClick={() => this.switchPage}/>
        <Button />
        <Button />

      </div>
    );
  }
}

export default Start;
