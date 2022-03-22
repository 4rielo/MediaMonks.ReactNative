import {
    FETCH_PHOTOS_BEGIN,
    FETCH_PHOTOS_SUCCESS,
    FETCH_PHOTOS_FAILURE    
  } from './photosActions';
  
  const initialState = {
    photosList: [],
    photosLoading: false,
    photosError: null
  };
  
  export default function albumsReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_PHOTOS_BEGIN:
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          photosLoading: true,
          photosError: null
        };
  
      case FETCH_PHOTOS_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        return {
          ...state,
          photosLoading: false,
          photosError: null,
          photosList: action.payload.photosList
        };
  
      case FETCH_PHOTOS_FAILURE:
        // The request failed. It's done. So set loading to "false".
        // Save the error, so we can display it somewhere.
        // Since it failed, we don't have items to display anymore, so set `items` empty.
        //
        // This is all up to you and your app though:
        // maybe you want to keep the items around!
        // Do whatever seems right for your use case.
        return {
          ...state,
          photosLoading: false,
          photosError: action.payload.error,
          photosList: []
        };
  
      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }