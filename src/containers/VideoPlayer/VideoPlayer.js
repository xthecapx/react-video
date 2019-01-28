import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../../store/actions';
import { withRouter } from 'react-router';

import VideoContainer from '../../components/VideoContainer/VideoContainer';
import VideoNavigation from '../../components/VideoNavigation/VideoNavigation';

class VideoPlayer extends Component {
  state = {
    index: 0
  };

  clickedRigthHandler = () => {
    this.setState(prevState => {
      let index;

      if (prevState.index === this.props.videos.length - 1) {
        index = 0;
      } else {
        index = prevState.index + 1;
      }

      const videoId = this.props.videos[index].id;

      this.props.onSelectId(this.props.videos[index].id);
      this.props.history.push(`/video/${videoId}`);

      return {
        index
      };
    });
  };

  clickedLeftHandler = () => {
    this.setState(prevState => {
      let index;

      if (prevState.index === this.props.videos.length - 1) {
        index = 0;
      } else {
        index = prevState.index - 1;
      }

      const videoId = this.props.videos[index].id;

      this.props.onSelectId(this.props.videos[index].id);
      this.props.history.push(`/video/${videoId}`);

      return {
        index
      };
    });
  };

  findVideoById = id => {
    return this.props.videos.find(video => {
      return video.id === id;
    });
  };

  render() {
    const id = this.props.videoId || this.props.match.params.id;
    const video = this.findVideoById(id);
    let $video = null;

    if (video) {
      $video = (
        <VideoContainer title={video.title} description={video.description} key={video.id} videoAssets={video.associated_video_assets} />
      );
    }

    return (
      <>
        <h1>VideoPlayer</h1>
        {$video}
        <VideoNavigation clickedLeft={this.clickedLeftHandler} clickedRigth={this.clickedRigthHandler} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    videos: state.videos,
    videoId: state.currentVideoId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectId: id => dispatch(selectVideo(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoPlayer);
