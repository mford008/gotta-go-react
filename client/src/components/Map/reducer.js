import { GET_LOCATION, GET_AUTO_INPUT } from './actions.js';

const initialState = {
  position: {},
  locationLoaded: false,
  autocompleteInput: '',
};

export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_LOCATION:
      return {
        ...state,
        position: data,
        locationLoaded: true,
      };
    case 'GET_AUTO_INPUT':
      return {
        ...state,
        autocompleteInput: data,
      };
    default:
      return state;
  }
}
