import React from "react"
import QuantityControl from "./QuantityControl"
import AddOnOption from "./AddOnOption"
const AddOnSection = ({ addOn, quantity, selectedOptions, onQuantityChange, onOptionToggle }) => {



  const inc = () => {
    onQuantityChange(addOn.name, quantity + 1)
  }
  const dec = () => {
    onQuantityChange(addOn.name, quantity > 0 ? quantity - 1 : 0)
  }

  return (
    <div className="addon-section">
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <h3>{addOn.name} (${addOn.price})</h3>
        <QuantityControl quantity={quantity} onIncrement={inc}  onDecrement={dec} />
      </div>

      <div className="addon-options">
        {addOn.options.map((opt,i) => (
          <AddOnOption key={i} option={opt} isChecked={selectedOptions.includes(opt)}
            onToggle={() => onOptionToggle(opt)} />
        ))}
      </div>
    </div>
  )
}

export default AddOnSection
