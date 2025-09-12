import React from 'react';

const AddOnOption = ({ option, isChecked, onToggle }) => (
  <div className="addon-option">
    <label>
      <input type="checkbox" checked={isChecked} onChange={() => onToggle(option)}/>
      {option}
    </label>
  </div>
);

export default AddOnOption;