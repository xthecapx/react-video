import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import VideoContainer from '../../components/VideoContainer/VideoContainer';

class VideoList extends Component {
  render() {
    const $videos = this.props.videos.map(video => {
      return (
        <VideoContainer title={video.title} description={video.description} key={video.id} videoAssets={video.associated_video_assets} />
      );
    });

    return (
      <div>
        <h1>VIDEO LIST</h1>
        {$videos}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    videos: state.videos
  };
};

export default connect(mapStateToProps)(VideoList);
