import actionTypes from './actionTypes';
const initialState = {
  presidents: [],
  isLoading: false
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === actionTypes.REQUEST_PRESIDENTS) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (action.type === actionTypes.RECEIVE_PRESIDENTS) {
    return {
      ...state,
      presidents: action.presidents,
      isLoading: false
    };
  }

  if (action.type === actionTypes.REQUEST_PRESIDENTS_ORDERED) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (action.type === actionTypes.RECEIVE_PRESIDENTS_ORDERED) {
    return {
      ...state,
      presidents: action.presidents,
      isLoading: false
    };
  }

  return state;
};
