import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import postGeo from './postGeo';

const rootReducer = combineReducers({
  postGeo,
  autocompleteInput,
  routing: routerReducer
});

export default rootReducer;
