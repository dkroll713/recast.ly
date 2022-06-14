import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js'
import exampleVideoData from '../data/exampleVideoData.js';
import searchYoutube from '../lib/searchYouTube.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playerVideo: exampleVideoData[0],
      listVideos: exampleVideoData,
    };
    this.handleClick = this.handleClick.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);
  }
  handleClick(event, video){
    console.log("you clicked a list element");
    this.setState({
      playerVideo: video
    })
    console.log(video);
  }

  getSearchResults() {
    var results = searchYoutube('cats', function() {
      console.log(this);
    })
    this.setState({
      playerVideo: results[0],
      listVideos: results,
    })
  }

  // componentDidMount() {
  //   this.getSearchResults()
  // }

  render() {
    console.log(this.state);
    return (
      <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <Search getSearch={this.getSearchResults}/>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video={this.state.playerVideo}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.listVideos} clickHandle={this.handleClick}/>
      </div>
    </div>
  </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

// test