import React, { useState } from 'react';
import { connect } from 'react-redux';

import { RATE_FORMULAS, VALUES_NAMES } from '../constants';
import { updatePrice, updateTotal, updateUnits } from '../store/actions';

const rateOptions = Object.entries(RATE_FORMULAS).map(([k, v]) => (
  <option value={k} key={k}>{v}</option>
));


const VolumeForm = ({ className, volume, updatePrice, updateTotal, updateUnits }) => {
  const [priceError, setPriceError] = useState('');
  const [totalError, setTotalError] = useState('');
  const [unitsError, setUnitsError] = useState('');

  const onPriceChange = e => {
    const value = e.currentTarget.value;
    updatePrice(value);
    if (!parseInt(value)) {
      return setPriceError('Price must be a non-zero number');
    }
    setPriceError('');
  };

  const onTotalChange = e => {
    const value = e.currentTarget.value;
    if (isNaN(value)) {
      return setTotalError('Total must be a number');
    }
    updateTotal(e.currentTarget.value);
    setTotalError('');
    };
  const onUnitsChange = e => {
    const value = e.currentTarget.value;
    if (isNaN(value)) {
      return setUnitsError('Units must be a number');
    }
    updateUnits(e.currentTarget.value);
    setUnitsError('');
  };

  return (
    <div className={className}>
      <div className="field">
        <label htmlFor={VALUES_NAMES.RATE}>Rate</label>
        <select value={volume.rateFormula}>
          {rateOptions}
        </select>
      </div>
      <div className="field">
        <label htmlFor={VALUES_NAMES.PRICE}>Price</label>
        <input
          name={VALUES_NAMES.PRICE}
          type="number"
          value={volume[VALUES_NAMES.PRICE]}
          onChange={onPriceChange}
        />
        {priceError && <span>{priceError}</span>}
      </div>
      <div className="field">
        <label htmlFor={VALUES_NAMES.TOTAL}>Total</label>
        <input
          name={VALUES_NAMES.TOTAL}
          type="number"
          value={volume[VALUES_NAMES.TOTAL]}
          onChange={onTotalChange}
        />
        {totalError && <span>{totalError}</span>}
      </div>
      <div className="field">
        <label htmlFor={VALUES_NAMES.UNITS}>Units</label>
        <input
          name={VALUES_NAMES.UNITS}
          type="number"
          value={volume[VALUES_NAMES.UNITS]}
          onChange={onUnitsChange}
        />
        {unitsError && <span>{unitsError}</span>}
      </div>
    </div>
  )
};

const mapStateToProps = ({ volume }) => ({ volume });

const mapDispatchToProps = dispatch => ({
  updatePrice: value => dispatch(updatePrice(value)),
  updateTotal: value => dispatch(updateTotal(value)),
  updateUnits: value => dispatch(updateUnits(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(VolumeForm);
