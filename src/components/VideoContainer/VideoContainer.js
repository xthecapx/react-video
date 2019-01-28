import classes from './VideoContainer.module.scss';
import React, { Component } from 'react';

import Video from '../UI/Video/Video';
import Controls from './Controls/Controls';

class VideoContainer extends Component {
  state = {
    index: 0
  };

  nextVideoHandler = () => {
    this.setState(prevState => {
      if (prevState.index === this.props.videoAssets.length - 1) {
        return {
          index: 0
        };
      } else {
        return {
          index: prevState.index + 1
        };
      }
    });
  };

  prevVideoHandler = () => {
    this.setState(prevState => {
      if (prevState.index === 0) {
        return {
          index: this.props.videoAssets.length - 1
        };
      } else {
        return {
          index: prevState.index - 1
        };
      }
    });
  };

  render() {
    const videoURL = this.props.videoAssets[this.state.index].video_asset.aws_original;
    const previewImage = this.props.videoAssets[this.state.index].video_asset.still_image;

    return (
      <div className={classes.VideoContainer}>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <div className={classes['VideoContainer--video-box']}>
          <Video posterImage={previewImage}>
            <source src={videoURL} type='video/mp4' />
          </Video>
          <Controls prevVideo={this.prevVideoHandler} nextVideo={this.nextVideoHandler} />
        </div>
      </div>
    );
  }
}

export default VideoContainer;
