import { combineReducers } from 'redux';

const INITIAL_VOLUME = {

};

const volume = (state = INITIAL_VOLUME, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default combineReducers({
  volume,
});