import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PublicLayout from './Layouts/PublicLayout';

import Home from './Home';
import NotFound from './NotFound';

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
          <AppRoute layout={PublicLayout} component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App;
