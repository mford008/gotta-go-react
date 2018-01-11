import { combineReducers } from 'redux';
import position from './components/Map/reducer';
import autocompleteInput from './components/Map/reducer';

const rootReducer = combineReducers({
  position,
  autocompleteInput,
});

export default rootReducer;
