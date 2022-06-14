import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var callback = () => {
  console.log('successfully searched');
};

var searchYouTube = (q, callback) => {
  // TODO
  // $.ajax({
  //   URL: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos/',
  //   type: 'GET',
  //   data: {
  //     key: YOUTUBE_API_KEY,
  //     q: q,
  //     part: 'snippet',
  //     // maxResults: 1,
  //     type: 'video',
  //     videoEmbeddable: true,
  // },
  //   contentType: 'application/json',
  //   success: function() {
  //     console.log('success');
  //     done();
  //   },
  //   error: () => {
  //     console.log('failed');
  //   }
  // })

  $.get( 'https://app-hrsei-api.herokuapp.com/api/recastly/videos/', {
    youtube_api_key: YOUTUBE_API_KEY,
    q: q,
  })
    .done(function(results) {
      console.log(results);
      if (callback) {
        callback(results)
      }
    })
    .fail(function() {
      alert( "error" );
    });

};

export default searchYouTube;
