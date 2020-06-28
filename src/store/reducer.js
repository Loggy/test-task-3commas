import { combineReducers } from 'redux';
import {
  INITIAL_VOLUME,
  VALUES_NAMES,
  UPDATE_UNITS,
  UPDATE_TOTAL,
  UPDATE_PRICE,
  UPDATE_UNITS_FINISHED,
  UPDATE_TOTAL_FINISHED,
  UPDATE_PRICE_FINISHED,
  CHANGE_FORMULA,
  RATE_FORMULAS
} from '../constants';

const round = (num) => {
  return +(Math.round(num + "e+2")  + "e-2");
};

const getValueToChange = (state, value) => (
  state.lastChange === VALUES_NAMES.TOTAL
        ? [VALUES_NAMES.UNITS, round(state[VALUES_NAMES.TOTAL] / value)]
        : [VALUES_NAMES.TOTAL, state[VALUES_NAMES.UNITS] * value]
);

const getRate = (formula, price) => {
  switch(RATE_FORMULAS[formula]) {
    case RATE_FORMULAS.PRICE: {
      return price;
    }
    case RATE_FORMULAS.INVERSE_PRICE: {
      return 1 / price;
    }
    case RATE_FORMULAS.DOUBLE_PRICE: {
      return 2 * price;
    }
    default:
      return price;
  }
};


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
      const rate = getRate(state.rateFormula, action.value);
      const valueToChange = getValueToChange(state, rate);
      return { 
        ...state,
        [VALUES_NAMES.PRICE]: action.value,
        [VALUES_NAMES.RATE]: rate,
        [valueToChange[0]]: valueToChange[1],
      }
    }
    case CHANGE_FORMULA: {
      const rate = getRate(action.formula, state[VALUES_NAMES.PRICE]);
      const valueToChange = getValueToChange(state, rate);
      return {
        ...state,
        rateFormula: action.formula,
        [VALUES_NAMES.RATE]: rate,
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
