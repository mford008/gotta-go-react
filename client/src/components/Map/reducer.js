import { GET_LOCATION, GET_AUTO_INPUT, RESET } from './actions.js';

const initialState = {

};

export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_LOCATION:
      return {
        ...state,
        data
      };
    case GET_AUTO_INPUT:
      return {
        ...state,
        autocompleteInput: data
      };
    case RESET:
      return {
        initialState
      };
    default:
      return state;
  }
}
