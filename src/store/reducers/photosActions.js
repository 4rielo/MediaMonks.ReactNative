export const FETCH_PHOTOS_BEGIN   = 'FETCH_PHOTOS_BEGIN';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';

export const fetchPhotosListBegin = () => ({
  type: FETCH_PHOTOS_BEGIN
});

export const fetchPhotosData = () => {
  return(dispatch) => {
      return fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(json => dispatch(
          { 
            type: FETCH_PHOTOS_SUCCESS,
            payload: {photosList: json }
          }
        )
      )
      .catch(error => dispatch(
          {
            type: FETCH_PHOTOS_FAILURE,
            payload: { error }
          }
        )
      )
  }
}