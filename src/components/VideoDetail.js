import React, { Component } from 'react';

class VideoDetail extends Component {


    videoPlayer = () => {
        const { selectedVideo } = this.props;
        
        
        if (selectedVideo){
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

export default VideoDetail;
