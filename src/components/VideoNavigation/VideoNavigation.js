import React, { Component } from 'react';

function VideoNavigation(props) {
  return (
    <>
      <div onClick={props.clickedLeft}>Arrow left</div>
      <div onClick={props.clickedRigth}>Arrow rigth</div>
    </>
  );
}

export default VideoNavigation;
