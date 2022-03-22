import { combineReducers } from "redux";

import albumsListReducer from './albumsListReducer'
import photosListReducer from './photosListReducer'

export default combineReducers({
    albumsListReducer,
    photosListReducer,
})