import React from 'react';

const QuantityControl = ({ quantity, onIncrement, onDecrement }) => (
  <div className="quantity-control">
    <button
      className="decrement"
      onClick={onDecrement}
      disabled={quantity <= 0}
    >  -
    
    </button>
    <span>{quantity}</span>
    <button className="increment" onClick={onIncrement}>+</button>
  </div>
);

export default QuantityControl;