import React, { Component } from 'react';
import SearchBar from './SearchBar';

import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import { connect } from 'react-redux';
import {  selectVideo, getVideo  } from '../actions'

class App extends Component {

  

  componentDidMount() {
    this.props.getVideo('buildings');
    
  };

  
  componentDidUpdate(){
        
  
    this.props.selectVideo(this.props.videos[0])
 
}



  render() {
    return (
      <div className  = "ui container">
        <SearchBar/>
        <div className="ui grid">
          <div className="eleven wide column">
            <VideoDetail/>  
          </div>
          <div className="five wide column">
            <VideoList/>
          </div>
          
        </div>
        
        
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    
   return {
      
      videos:state.videos
    }
}

export default connect( mapStateToProps, { selectVideo, getVideo })(App);
