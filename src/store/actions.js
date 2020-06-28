import { UPDATE_PRICE, UPDATE_TOTAL, UPDATE_UNITS } from '../constants';

export const updatePrice = value => ({
  type: UPDATE_PRICE,
  value,
});

export const updateTotal = value => ({
  type: UPDATE_TOTAL,
  value,
});

export const updateUnits = value => ({
  type: UPDATE_UNITS,
  value,
});