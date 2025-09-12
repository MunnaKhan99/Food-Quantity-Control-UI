import React, { useState, useEffect } from "react";
import MainItemSection from "./components/MainItemSection";

import "./App.css";

const App = () => {
  const [foodData, setFoodData] = useState(null);
  const [mainQty, setMainQty] = useState(1);


  useEffect(() => {
    fetch("/foodData.json")
      .then(res => res.json())
      .then(data => {
        setFoodData(data)
        const initOptions = {}
        data.addOns.forEach(addOn => {
          initOptions[addOn.name] = []
        })
        
      })
  }, [])



  if (!foodData) {
    return <div className="app-container">Loading...</div>
  }

  return (
    <div className="app-container">
      <h1>Food Order</h1>

      {/* Main item */}
      <MainItemSection
        item={foodData.mainItem}
        quantity={mainQty}
        onQuantityChange={setMainQty}
      />

    </div>
  )
}

export default App
