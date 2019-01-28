import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import { fetchVideos } from './store/actions/videos';

import Layout from './components/layout/Layout';
import VideoList from './containers/VideoList/VideoList';
import VideoPlayer from './containers/VideoPlayer/VideoPlayer';

class App extends Component {
  componentDidMount() {
    this.props.onFetchVideos();
  }

  render() {
    console.log(9);
    return (
      <Layout>
        <Switch>
          <Route path='/video/:id' component={VideoPlayer} />
          <Route path='/' exact component={VideoList} />
          <Route
            render={() => {
              return <h1>Not found!!!</h1>;
            }}
          />
        </Switch>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchVideos: () => dispatch(fetchVideos())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
