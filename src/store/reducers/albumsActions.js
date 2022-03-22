export const FETCH_ALBUMS_BEGIN   = 'FETCH_ALBUMS_BEGIN';
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';
export const FETCH_ALBUMS_FAILURE = 'FETCH_ALBUMS_FAILURE';

export const fetchAlbumsListBegin = () => ({
  type: FETCH_ALBUMS_BEGIN
});

export const fetchAlbumsData = () => {
  return(dispatch) => {
      return fetch("https://jsonplaceholder.typicode.com/albums")
      .then(response => response.json())
      .then(json => dispatch(
          { 
            type: FETCH_ALBUMS_SUCCESS,
            payload: {albumsList: json }
          }
        )
      )
      .catch(error => dispatch(
          {
            type: FETCH_ALBUMS_FAILURE,
            payload: { error }
          }
        )
      )
  }
}