import React, { Component } from 'react';
import VideoItem from './VideoItem';
import './videoList.css';
import { connect } from 'react-redux';
import {  selectVideo  } from '../actions'


class VideoList extends Component {



   

    /*onVideoSelect = (selectedVideo) => {

        this.props.onVideoSelect(selectedVideo)

    };*/

    renderList = ()=>{
        const { videos } = this.props;
        if (videos){
            
            return videos.map((video) =>{
                return (
                    <VideoItem
                        //onVideoSelect = {this.onVideoSelect} 
                        video = {video} 
                        key={video.id.videoId}/>
                )
            })
        }
    };




    render() {
        return (
            <div className= "ui relaxed divided list video-list">
                {this.renderList()}
            </div>
        );
    }


}



const mapStateToProps = (state) => {
    //console.log(state.videos)
    return {
       videos:state.videos
    }
}

export default connect( mapStateToProps, {selectVideo})(VideoList);
