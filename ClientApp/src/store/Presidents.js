const requestPresidentsType = 'REQUEST_PRESIDENTS';
const receivePresidentsType = 'RECEIVE_PRESIDENTS';
const requestPresidentsOrderedType = 'REQUEST_PRESIDENTS_ORDERED';
const receivePresidentsOrderedType = 'RECEIVE_PRESIDENTS_ORDERED';
const initialState = { presidents: [], isLoading: false };

export const actionCreators = {
  requestPresidents: () => async (dispatch, getState) => {
    if (getState().Presidents.isLoading) {
      // Don't issue a duplicate request (we already have or are loading the requested data)
      return;
    }

    dispatch({ type: requestPresidentsType });

    const url = `api/Presidents/`;
    const response = await fetch(url);
    const presidents = await response.json();
    dispatch({ type: receivePresidentsType, presidents });
  },

  requestPresidentsOrdered: (asc) => async (dispatch, getState) => {
    if (getState().Presidents.isLoading) {
      // Don't issue a duplicate request (we already have or are loading the requested data)
      return;
    }

    dispatch({ type: requestPresidentsOrderedType, asc });

    const url = `api/Presidents/${asc}`;
    const response = await fetch(url);
    const presidents = await response.json();
    dispatch({ type: receivePresidentsOrderedType, presidents });
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === requestPresidentsType) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (action.type === receivePresidentsType) {
    return {
      ...state,
      presidents: action.presidents,
      isLoading: false
    };
  }

  if (action.type === requestPresidentsOrderedType) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (action.type === receivePresidentsOrderedType) {
    return {
      ...state,
      presidents: action.presidents,
      isLoading: false
    };
  }

  return state;
};
