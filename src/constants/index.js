export const RATE_FORMULAS = {
  PRICE: 'Price',
  INVERSE_PRICE: ' 1 / Price',
  DOUBLE_PRICE: '2 * Price',
};

export const VALUES_NAMES = {
  RATE: 'rate',
  PRICE: 'price',
  TOTAL: 'total',
  UNITS: 'units',
};

export const INITIAL_VOLUME = {
  [VALUES_NAMES.PRICE]: 100,
  [VALUES_NAMES.RATE]: 100,
  [VALUES_NAMES.TOTAL]: 100,
  [VALUES_NAMES.UNITS]: 100,
  rateFormula: RATE_FORMULAS.PRICE,
  lastChange: VALUES_NAMES.TOTAL,
};

export const UPDATE_PRICE ='UPDATE_PRICE';
export const UPDATE_TOTAL ='UPDATE_TOTAL';
export const UPDATE_UNITS ='UPDATE_UNITS';
