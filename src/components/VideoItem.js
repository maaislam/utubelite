import React, { Component } from 'react';
import './videoItem.css';

import { connect } from 'react-redux';
import {  selectVideo  } from '../actions'

class VideoItem extends Component {

   

    onVideoSelect = () => {

        //this.props.onVideoSelect(this.props.video)
        this.props.selectVideo(this.props.video)
    }


    render() {
        return (
            <div onClick = {this.onVideoSelect} className="ui container item video-item">
                <div>
                    <img 
                        className = "ui image"
                        src={this.props.video.snippet.thumbnails.medium.url} 
                        alt={this.props.video.snippet.description}/>
                </div>

                <span>
                    <div className="header">
                        {this.props.video.snippet.title}
                    </div>
                </span>  
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
       videos:state.videos
    }
}

export default connect( mapStateToProps, { selectVideo })(VideoItem);
