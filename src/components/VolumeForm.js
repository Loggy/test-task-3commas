import React from 'react';
import { connect } from 'react-redux';
import { RATE_FORMULAS, VALUES_NAMES } from '../constants';
import { updatePrice, updateTotal, updateUnits } from '../store/actions';

const rateOptions = Object.entries(RATE_FORMULAS).map(([k, v]) => (
  <option value={k} key={k}>{v}</option>
));

const VolumeForm = ({ className, volume, updatePrice, updateTotal, updateUnits }) => {
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
          onChange={(e) => { updatePrice(e.currentTarget.value)}}
        />
      </div>
      <div className="field">
        <label htmlFor={VALUES_NAMES.TOTAL}>Total</label>
        <input
          name={VALUES_NAMES.TOTAL}
          type="number"
          value={volume[VALUES_NAMES.TOTAL]}
          onChange={(e) => { updateTotal(e.currentTarget.value)}}
        />
      </div>
      <div className="field">
        <label htmlFor={VALUES_NAMES.UNITS}>Units</label>
        <input
          name={VALUES_NAMES.UNITS}
          type="number"
          value={volume[VALUES_NAMES.UNITS]}
          onChange={(e) => { updateUnits(e.currentTarget.value)}}
        />
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