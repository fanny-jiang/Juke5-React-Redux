// need from state to be passed in as props:
// songs
// isPlaying
// currentSong
// genreName

import { connect } from 'react-redux';
import Station from '../components/Station';
import convertSong from '../utils.js';

const mapStateToProps = function (state, ownProps) {
    console.log('station props: ', ownProps);
  return {
    genreName: ownProps.params.genreName,
    songs: state.songs
      .filter(song => song.genre === ownProps.params.genreName)
      .map(convertSong),
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {};
}

const StationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Station);

export default StationContainer;