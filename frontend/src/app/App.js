import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from './store.js';
import {Login} from './SignIn'
import { Home } from './Home'
import { SignUp } from './SignUp'
import '../features/styles/SignUp.css'


// Rendering the Cart component below <Inventory />
export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home
            state={store.getState()}
            dispatch={store.dispatch} />}></Route>
        </Routes>
        <Routes>
          <Route path="/sign-up" element={<SignUp />}></Route>
        </Routes>
        <Routes>
          <Route path="/sign-in" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

