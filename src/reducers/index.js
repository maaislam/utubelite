
import { combineReducers } from 'redux';



const selectedVideoReducer =  (state = null, action) => {
   
    switch (action.type) {
        case 'VIDEO_SELECTED':
            return action.payload;    
    
        default:
            return state; 
    }

}


const searchTermReducer = (state = '', action) => {

    switch (action.type) {
        case 'INPUT':
            return action.payload
            
    
        default:
            return state;
    }

};



//for the api call

const getVideoReducer = (state = [], action) => {

    switch (action.type) {
        case 'GET_VIDEO':
            return action.payload 
    
        default:
            
        return state
    }

}



export default combineReducers({
    selectedVideo: selectedVideoReducer,
    videos:getVideoReducer,
    searchTerm: searchTermReducer
});

