import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PublicLayout from './Layouts/PublicLayout';

import Home from './Home';
import NotFound from './NotFound';
import Facebook from './Facebook'

class App extends Component {
  render() {
    const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
      <Route {...rest} render={props => (
        <Layout>
          <Component {...props}/>
        </Layout>
      )} />
    )

    return (
      <div>
        <Switch>
          <AppRoute exact path="/" layout={PublicLayout} component={Home}/>
          <AppRoute path="/facebook" layout={PublicLayout} component={Facebook}/>
          <AppRoute layout={PublicLayout} component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App;
