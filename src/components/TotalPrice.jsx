import React from 'react';

const TotalPrice = ({ mainItem, mainQuantity, addOns, addOnQuantities, selectedOptions }) => {
  const mainPrice = mainItem.price * mainQuantity;
  const addOnPrice = addOns.reduce((total, addOn) => {
    const quantity = addOnQuantities[addOn.name] || 0;
    const selectedCount = selectedOptions[addOn.name]?.length || 0;
    return total + addOn.price * quantity * (selectedCount || 1);
  }, 0);

  return (
    <div className="total-price">
      Total: ${(mainPrice + addOnPrice).toFixed(2)}
    </div>
  );
};

export default TotalPrice;