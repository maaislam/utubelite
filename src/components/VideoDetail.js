import React, { Component } from 'react';

import { connect } from 'react-redux';



class VideoDetail extends Component {

 
    videoPlayer = () => {
       
     
        
        if (this.props.selectedVideo){

            const { selectedVideo } = this.props;
                console.log(selectedVideo)
            const vidSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
            return(
                <div >
                    <div className="ui embed">
                        <iframe src={vidSrc} title = {selectedVideo.snippet.title}/>
                    </div>
                    <div className="ui segment">
                        <h4 className="ui header">{selectedVideo.snippet.title}</h4>
                        <p>{selectedVideo.snippet.description}</p>
                    </div>
                   
                </div>
            )
        } else {
            return(
                <div>Loading...</div>
            );
        };
    };

    render() {
        return (
            <div>
                {this.videoPlayer()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    
    return {
      selectedVideo:state.selectedVideo
    }
  };
export default connect(mapStateToProps)(VideoDetail);
