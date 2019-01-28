import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

function NavigationItems(props) {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link={`/video/${props.videoId}`}>Video Player</NavigationItem>
      <NavigationItem link='/video-list' exact>
        Video List
      </NavigationItem>
    </ul>
  );
}

const mapStateToProps = state => {
  return {
    videoId: state.currentVideoId
  };
};

export default withRouter(connect(mapStateToProps)(NavigationItems));
