import React from "react";
import '../features/styles/Home.css'

import { Navbar } from "../components/Navbar";
import { Inventory } from "../features/inventory/Inventory.js";
import { CurrencyFilter } from "../features/currencyFilter/CurrencyFilter.js";
import { Cart } from "../features/cart/Cart.js";
import { SearchTerm } from "../features/searchTerm/SearchTerm.js";

// Rendering the Cart component below <Inventory />
export const Home = (props) => {
  const { state, dispatch } = props;

  return (
    <div className="root-home">
      <div>
        <Navbar />
      </div>
      <div className="home">
        <SearchTerm searchTerm={state.searchTerm} dispatch={dispatch} />

        <CurrencyFilter
          currencyFilter={state.currencyFilter}
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
    </div>
  );

  function getFilteredItems(items, searchTerm) {
    return items.filter((items) =>
      items.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
};
