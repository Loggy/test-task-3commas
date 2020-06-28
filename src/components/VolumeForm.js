import React from 'react';

const VolumeForm = ({ className }) => {
  return (
    <div className={className}>
      <div className="field">
        <label for="rate">Rate</label>
        <select>
          <option value="">Price</option>
          <option value="">Units * Rate</option>
          <option value="">Total / Rate</option>
        </select>
      </div>
      <div className="field">
        <label for="price">Price</label>
        <input name="price" type="number" />
      </div>
      <div className="field">
        <label for="total">Total</label>
        <input name="total" type="number" />
      </div>
      <div className="field">
        <label for="units">Units</label>
        <input name="units" type="number" />
      </div>
    </div>
  )
};

export default VolumeForm;