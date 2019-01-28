import React, { Component } from 'react';
import { connect } from 'react-redux';

import VideoContainer from '../../components/VideoContainer/VideoContainer';
import { fetchVideos } from '../../store/actions';

class VideoList extends Component {
  componentDidMount() {
    this.props.onFetchVideos();
  }

  render() {
    const $videos = this.props.videos.map(video => {
      return (
        <VideoContainer title={video.title} description={video.description} key={video.id} videoAssets={video.associated_video_assets} />
      );
    });
    return (
      <div>
        <p>Video List</p>
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

const mapDispatchToProps = dispatch => {
  return {
    onFetchVideos: () => dispatch(fetchVideos())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);
