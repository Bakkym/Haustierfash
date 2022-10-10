// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import './index.css';
// import { Auth0Provider } from '@auth0/auth0-react';
// import App from './App';
// import reportWebVitals from '../reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// 	<React.StrictMode>
// 		<Auth0Provider
// 			domain="dev-0wsz17nn.us.auth0.com"
// 			clientId="QdKG0YHD9GgCDqoQSEiJWYyTEo1r9WOA"
// 			redirectUri={window.location.origin}
// 		>
// 			<App />
// 		</Auth0Provider>
// 	</React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app/App.js';
// Importing the store here.
import { store } from './app/store.js';

// Pass state and dispatch props to the <App /> component.
const render = () => {
	ReactDOM.render(
		<App state={store.getState()} dispatch={store.dispatch} />,
		document.getElementById('root')
	);
};
render();

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// 	<React.StrictMode>
// 		<Auth0Provider
// 			domain="dev-0wsz17nn.us.auth0.com"
// 			clientId="QdKG0YHD9GgCDqoQSEiJWYyTEo1r9WOA"
// 			redirectUri={window.location.origin}
// 		>
// 			<App />
// 		</Auth0Provider>
// 	</React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
store.subscribe(render);
