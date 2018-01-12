import { combineReducers } from 'redux';
import position from './components/Map/reducer';

const rootReducer = combineReducers({
  position,
});

export default rootReducer;
