import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
 const [viewMode, setViewMode] = useState(false);

  // this will be used for the Dark Mode Toggle feature

  const appClass = viewMode ? "App dark" : "App light"
   if (viewMode === true) {
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick ={() => setViewMode(!viewMode)}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
} else if (viewMode === false) {
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => setViewMode(!viewMode)}>Light Mode</button>
      </header>
      <ShoppingList items = {itemData} />
    </div>
  );
}
}
export default App;
