import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import { connect } from 'react-redux';
import {  selectVideo  } from '../actions'

class App extends Component {

  state = {

    videos: [],
    //selectedVideo:null

  };


  componentDidMount() {
    this.onFormSubmit('cat')
  };

  onFormSubmit = async (searchTerm) =>{

    const KEY  = 'AIzaSyCRUtfXi15E6BEu5xx6LE-h3BS5soELJhg';

      try{
        const response = await youtube.get('/search',{
        params: {
          q: searchTerm,
          part: "snippet",
          maxResults: 10,
          key: KEY
        }
      });
      //console.log(response);
      //set state with response data items
      this.props.selectVideo(response.data.items[0])
      this.setState({
        videos:response.data.items,
        //selectedVideo:response.data.items[0]
      })
      }catch (err) {
        console.log(err)
      }
    };

  /*onVideoSelect = (selectedVideo)=>{
    this.setState({
      selectedVideo
    });
  };
*/


  render() {
    return (
      <div className  = "ui container">
        <SearchBar onFormSubmit= {this.onFormSubmit}/>
        <div className="ui grid">
          <div className="eleven wide column">
            <VideoDetail/>  
          </div>
          <div className="five wide column">
            <VideoList videos={this.state.videos}/>
          </div>
          
        </div>
        
        
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  
   return {
      selectedVideo:state.selectedVideo
    }
}

export default connect( mapStateToProps, { selectVideo })(App);
