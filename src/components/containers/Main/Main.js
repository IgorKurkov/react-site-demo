import React from "react";
import { Switch, Route } from 'react-router-dom';
import { HowTo, Calendar, Contacts } from "../../pages";

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={HowTo}/>
          <Route path="/calendar" component={Calendar}/>
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </main>
    );
  }
}
