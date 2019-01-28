import classes from './Video.module.scss';
import React from 'react';

function Video(props) {
  return (
    <div className={classes['Video--container']}>
      <video width='320' height='240' controls className={classes['Video--item']} poster={props.posterImage}>
        {props.children}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
