
import youtube from '../apis/youtube';

export const selectVideo = (selectedVideo) => {
    return {
        type: 'VIDEO_SELECTED',
        payload:selectedVideo
    }
    
};



export const onSearchInput = (searchTerm ) => {
    return {
        type: 'INPUT',
        payload: searchTerm 
    }
}




export const getVideo = (searchTerm) => {
    const KEY  = 'AIzaSyCRUtfXi15E6BEu5xx6LE-h3BS5soELJhg';
    return async (dispatch) => {

        const response = await youtube.get('/search',{
            params: {
              q: searchTerm,
              part: "snippet",
              maxResults: 10,
              key: KEY
            }
          });

        dispatch({type: 'GET_VIDEO', payload: response.data.items})
    }
    
};




