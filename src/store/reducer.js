import { combineReducers } from 'redux';
import {
  INITIAL_VOLUME,
  VALUES_NAMES,
  UPDATE_UNITS,
  UPDATE_TOTAL,
  UPDATE_PRICE,
  UPDATE_UNITS_FINISHED,
  UPDATE_TOTAL_FINISHED,
  UPDATE_PRICE_FINISHED
} from '../constants';

function round(num) {
  return +(Math.round(num + "e+2")  + "e-2");
}

const volume = (state = INITIAL_VOLUME, action) => {
  switch (action.type) {
    case UPDATE_TOTAL: {
      return { 
        ...state,
        [VALUES_NAMES.TOTAL]: action.value,
        lastChange: VALUES_NAMES.TOTAL,
      }
    }
    case UPDATE_UNITS: {
      return { 
        ...state,
        [VALUES_NAMES.UNITS]: action.value,
        lastChange: VALUES_NAMES.UNITS,
      }
    }
    case UPDATE_PRICE: {
      return { 
        ...state,
        [VALUES_NAMES.PRICE]: action.value,
      }
    }
    case UPDATE_TOTAL_FINISHED: {
      return { 
        ...state,
        [VALUES_NAMES.UNITS]: round(action.value / state[VALUES_NAMES.RATE]),
      }
    }
    case UPDATE_UNITS_FINISHED: {
      return { 
        ...state,
        [VALUES_NAMES.TOTAL]: action.value * state[VALUES_NAMES.RATE],
      }
    }
    case UPDATE_PRICE_FINISHED: {
      const valueToChange = state.lastChange === VALUES_NAMES.TOTAL
        ? [VALUES_NAMES.UNITS, round(state[VALUES_NAMES.TOTAL] / action.value)]
        : [VALUES_NAMES.TOTAL, state[VALUES_NAMES.UNITS] * action.value];
      return { 
        ...state,
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
