import { combineReducers } from 'redux';
import { INITIAL_VOLUME, VALUES_NAMES, UPDATE_UNITS, UPDATE_TOTAL, UPDATE_PRICE } from '../constants';

const volume = (state = INITIAL_VOLUME, action) => {
  switch (action.type) {
    case UPDATE_TOTAL: {
      return { 
        ...state,
        [VALUES_NAMES.TOTAL]: action.value,
        [VALUES_NAMES.UNITS]: action.value / state[VALUES_NAMES.RATE],
        lastChange: VALUES_NAMES.TOTAL,
      }
    }
    case UPDATE_UNITS: {
      return { 
        ...state,
        [VALUES_NAMES.UNITS]: action.value,
        [VALUES_NAMES.TOTAL]: action.value * state[VALUES_NAMES.RATE],
        lastChange: VALUES_NAMES.UNITS,
      }
    }
    case UPDATE_PRICE: {
      console.log(state.lastChange, VALUES_NAMES.TOTAL)
      const valueToChange = state.lastChange === VALUES_NAMES.TOTAL
        ? [VALUES_NAMES.UNITS, state[VALUES_NAMES.TOTAL] / action.value]
        : [VALUES_NAMES.TOTAL, state[VALUES_NAMES.UNITS] * action.value];
      return { 
        ...state,
        [VALUES_NAMES.PRICE]: action.value,
        [VALUES_NAMES.RATE]: action.value,
        [valueToChange[0]]: valueToChange[1],
      }
    }
    default:
      return state;
  };
};

export default combineReducers({
  volume,
});