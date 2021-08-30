import React from 'react';

export const PeriodSelector = () => {
  return (
    <div className="month-select">
      <select defaultValue="12" id="monthsQuantitySelector" name="" className="selectpicker show-tick">
        <option value="3">3 Month</option>
        <option value="6">6 Month</option>
        <option value="12">12 Month</option>
      </select>
    </div>
  )
}