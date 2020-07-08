import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY  = 'AIzaSyBsSb7HZlO4JGnr--H6b_mi7o5Ty8AtoGI';


class App extends Component {

  state = {

    videos: [],
    selectedVideo:null

  };


  componentDidMount() {
    this.onFormSubmit('cat')
  };

  onFormSubmit = async (searchTerm) =>{
      try{
        const response = await youtube.get('/search',{
        params: {
          q: searchTerm,
          part: "snippet",
          maxResults: 10,
          key: KEY
        }
      });
      console.log(response);
      //set state with response data items
      this.setState({
        videos:response.data.items,
        selectedVideo:response.data.items[0]
      })
      }catch (err) {
        console.log(err)
      }
    };

  onVideoSelect = (selectedVideo)=>{
    this.setState({
      selectedVideo
    });
  };



  render() {
    return (
      <div className  = "ui container">
        <SearchBar onFormSubmit= {this.onFormSubmit}/>
        <div className="ui grid">
          <div className="eleven wide column">
            <VideoDetail selectedVideo = {this.state.selectedVideo}/>  
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
          </div>
          
        </div>
        
        
      </div>
    );
  }
}

export default App;