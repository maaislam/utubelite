
import { combineReducers } from 'redux';

const initialState = {

    selectedVideo:null
}

const selectedVideoReducer =  (state = initialState, action) => {
   
    if(action.type==='VIDEO_SELECTED'){
        return action.payload;
    }

    return state.selectedVideo;
}

export default combineReducers({
    selectedVideo: selectedVideoReducer
});