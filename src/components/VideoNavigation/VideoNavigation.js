import React from 'react';
import classes from './VideoNavigation.module.scss';

function VideoNavigation(props) {
  const leftArrowClasses = [classes.Arrow, classes['Arrow--left']];
  const rigthArrowClasses = [classes.Arrow, classes['Arrow--right']];
  return (
    <>
      <div onClick={props.clickedLeft} className={leftArrowClasses.join(' ')} />
      <div onClick={props.clickedRigth} className={rigthArrowClasses.join(' ')} />
    </>
  );
}

export default VideoNavigation;
