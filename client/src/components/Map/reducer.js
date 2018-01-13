const initialState = {
  latitude: undefined,
  longitude: undefined,
};

export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case 'GET_LOCATION':
      return {
        ...state,
        latitude: data.latitude,
        longitude: data.longitude,
      };
    case 'GET_AUTO_INPUT':
      return {
        ...state,
        autocompleteInput: data
      };
    case 'RESET':
      return {
        initialState
      };
    default:
      return state;
  }
}
