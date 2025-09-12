import React from 'react';
import QuantityControl from './QuantityControl';
const MainItemSection = ({ item, quantity, onQuantityChange }) => {



  const handleIncrement = () => onQuantityChange(quantity + 1);
  const handleDecrement = () => onQuantityChange(Math.max(0, quantity - 1));

  return (
    <div className="main-item">
      <div className="flex-between">
        <h2>{item.name} (${item.price.toFixed(2)})</h2>
        <QuantityControl
          quantity={quantity} onIncrement={handleIncrement}
          onDecrement={handleDecrement}/>
      </div>
    </div>
  );
};

export default MainItemSection;