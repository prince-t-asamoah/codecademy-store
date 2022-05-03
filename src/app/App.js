import React from "react";
import './App.css';

import { Inventory } from "../features/inventory/Inventory.js";
import { CurrencyFilter } from "../features/currencyFilter/CurrencyFilter.js";
import { Cart } from "../features/cart/Cart.js";
import { SearchTerm } from "../features/searchTerm/SearchTerm.js";
// Render the Cart component below <Inventory />

const App = (props) => {
  const { state, dispatch } = props;
  
  const getFilteredItems = (items, searchTerm) => {
    return items.filter((items) =>
      items.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      <SearchTerm
        searchTerm={state.searchTerm}
        dispatch={dispatch}
      />
      <Inventory
        inventory={getFilteredItems(state.inventory, state.searchTerm)}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );
};


export default App;