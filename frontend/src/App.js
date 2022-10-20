import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Nabvar/Navbar";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Wishlist from "./pages/Wishlist/Wishlist";
import { resetAllState, setAuth } from "./store/authSlice";


export default function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth)
  const token = localStorage.getItem('token')

  useEffect(() => {
    const loginVerify = async () => {
      const res = await fetch('/api/auth/signin', {
        headers: {
          'token' : token
        }
      })
      if(!res.ok) {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        dispatch(resetAllState())
      }
      /* Use localstorage here to store and get the cart from the prev session */
    }

    if (token) {
      dispatch(setAuth({ token: localStorage.getItem("token"), username: localStorage.getItem('username') }));
      loginVerify()
    } 
  }, [dispatch, token]);
 

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={isAuth ? <Navigate to={'/'} /> : <Register />} />
        <Route path="/login" element={isAuth ? <Navigate to={'/'} /> : <Login />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
