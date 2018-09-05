import actionTypes from './../store/actionTypes';

export const actionCreators = {
  requestPresidents: () => async (dispatch, getState) => {
    if (getState().Presidents.isLoading) {
      // Don't issue a duplicate request (we already have or are loading the requested data)
      return;
    }

    dispatch({ type: actionTypes.REQUEST_PRESIDENTS });

    const url = 'api/Presidents/';
    const response = await fetch(url);
    const presidents = await response.json();
    dispatch({ type: actionTypes.RECEIVE_PRESIDENTS, presidents });
  },

  requestPresidentsOrdered: (asc) => async (dispatch, getState) => {
    if (getState().Presidents.isLoading) {
      // Don't issue a duplicate request (we already have or are loading the requested data)
      return;
    }

    dispatch({ type: actionTypes.REQUEST_PRESIDENTS_ORDERED, asc });

    const url = `api/Presidents/${asc}`;
    const response = await fetch(url);
    const presidents = await response.json();
    dispatch({ type: actionTypes.REQUEST_PRESIDENTS_ORDERED, presidents });
  }
};
