import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Layout from './components/layout/Layout';
import VideoList from './containers/VideoList/VideoList';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/' exact component={VideoList} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
