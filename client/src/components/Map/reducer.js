import { GET_LOCATION, GET_AUTO_INPUT, RESET } from './actions.js';

const initialState = {
  position: {},
  autocompleteInput: '',
};

export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_LOCATION:
      return {
        ...state,
        position: data,
      };
    case GET_AUTO_INPUT:
      return {
        ...state,
        autocompleteInput: data,
      };
    case RESET:
      return {
        ...state,
        position: {},
        autocompleteInput: '',
      };
    default:
      return state;
  }
}
