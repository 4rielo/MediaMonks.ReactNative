import {
    FETCH_ALBUMS_BEGIN,
    FETCH_ALBUMS_SUCCESS,
    FETCH_ALBUMS_FAILURE
  } from './albumsActions';
  
  const initialState = {
    albumsList: [],
    albumsLoading: false,
    albumsError: null
  };
  
  export default function albumsReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_ALBUMS_BEGIN:
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          albumsLoading: true,
          albumsError: null
        };
  
      case FETCH_ALBUMS_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        return {
          ...state,
          albumsLoading: false,
          albumsError: null,
          albumsList: action.payload.albumsList
        };
  
      case FETCH_ALBUMS_FAILURE:
        // The request failed. It's done. So set loading to "false".
        // Save the error, so we can display it somewhere.
        // Since it failed, we don't have items to display anymore, so set `items` empty.
        //
        // This is all up to you and your app though:
        // maybe you want to keep the items around!
        // Do whatever seems right for your use case.
        return {
          ...state,
          albumsLoading: false,
          albumsError: action.payload.error,
          albumsList: []
        };
  
      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }