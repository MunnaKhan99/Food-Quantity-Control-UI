import React, { useState, useEffect } from "react";
import MainItemSection from "./components/MainItemSection";
import AddOnSection from "./components/addOnSection";
import TotalPrice from "./components/TotalPrice";
import "./App.css";

const App = () => {
  const [foodData, setFoodData] = useState(null);
  const [mainQty, setMainQty] = useState(1);
  const [addOnQty, setAddOnQty] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    fetch("/foodData.json")
      .then(res => res.json())
      .then(data => {
        setFoodData(data)
        const initOptions = {}
        data.addOns.forEach(addOn => {
          initOptions[addOn.name] = []
        })
        setSelectedOptions(initOptions)
      })
  }, [])

  const handleAddOnQty = (addOnName, qty) => {
    setAddOnQty(prev => ({
      ...prev, [addOnName]: qty
    }))
  }

  const toggleOption = (addOnName, option) => {
    setSelectedOptions(prev => {
      const already = prev[addOnName] || []
      if (already.includes(option)) {
        return {
          ...prev, [addOnName]: already.filter(opt => opt !== option)
        }
      } else {
        return {
          ...prev,
          [addOnName]: [...already, option]
        }
      }
    })
  }

  if (!foodData) {
    return <div className="app-container">Loading...</div>
  }

  return (
    <div className="app-container">
      <h1>Food Order</h1>
      <MainItemSection item={foodData.mainItem} quantity={mainQty}
        onQuantityChange={setMainQty}
      />

      Add-ons
      {foodData.addOns.map(addOn => (
        <AddOnSection key={addOn.name} addOn={addOn}
          quantity={addOnQty[addOn.name] || 0}
          selectedOptions={selectedOptions[addOn.name] || []}
          onQuantityChange={handleAddOnQty}
          onOptionToggle={(option) => toggleOption(addOn.name, option)}
        />
      ))}

      <TotalPrice
        mainItem={foodData.mainItem} mainQuantity={mainQty}
        addOns={foodData.addOns} addOnQuantities={addOnQty}
        selectedOptions={selectedOptions}
      />
    </div>
  )
}

export default App
