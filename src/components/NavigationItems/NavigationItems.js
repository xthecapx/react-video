import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classes from './NavigationItems.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

function NavigationItems(props) {
  console.log('asd');
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/' exact>
        Video List
      </NavigationItem>
      <NavigationItem link={`/video/${props.videoId}`}>Video Player</NavigationItem>
    </ul>
  );
}

const mapStateToProps = state => {
  return {
    videoId: state.currentVideoId
  };
};

export default withRouter(connect(mapStateToProps)(NavigationItems));
