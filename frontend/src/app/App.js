// import React from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
// import LoginButton from '../components/LoginButton';
// import Profile from '../components/Profile';
// import LogoutButton from '../components/LogoutButton';

// function App() {
// 	const { isAuthenticated, isLoading } = useAuth0();
// 	if (isLoading) return <h1>Loading...</h1>;
// 	return (
// 		<div className="App">
// 			<h1>Haustierfash</h1>
// 			{isAuthenticated ? <LogoutButton /> : <LoginButton />}
// 			<Profile />

// 			<form action="../../post" method="post" className="form">
// 				<button type="submit">Connected?</button>
// 			</form>
// 		</div>
// 	);
// }

// export default App;

import React from 'react';

import { Inventory } from '../features/inventory/Inventory.js';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.js';
// Importing the Cart component here.
import { Cart } from '../features/cart/Cart.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';

// Rendering the Cart component below <Inventory />
export const App = (props) => {

  const { state, dispatch } = props;

  return (
    <div>
      <SearchTerm
        searchTerm={state.searchTerm}
        dispatch={dispatch}
      />

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
  );

  function getFilteredItems(items, searchTerm) {
    return items.filter(items => items.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
};
