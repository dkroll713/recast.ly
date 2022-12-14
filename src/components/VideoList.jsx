import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';

// console.log(exampleVideoData);
var VideoList = (props) => (
  // console.log('videos props:', props),
  <div className="video-list">
    {props.videos.map(function (video) {
      // console.log(video);
      return <VideoListEntry key={video.id.videoId} video={video} clickHandle={props.clickHandle}/>;
    })}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
