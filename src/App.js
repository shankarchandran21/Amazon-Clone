import "./App.css";
import Header from "./Container/Header/Header";
import Home from "./Container/Home/Home";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Container/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useGlobalContext } from "./Context/Context";
import { SET_USER } from "./reducer/Action";
import Payment from "./Container/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51NCkJ2SE0kCngxzgvtkjuq8iBCPmydVq59O60WpyXB4mGlwOMDmvqeCSh719OAixFIGDmwP4DUO3obxPcMzWYT5T0001pnIWVe"
);

function App() {
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User:>", authUser);
      if (authUser) {
        dispatch({ type: SET_USER, user: authUser });
      } else {
        dispatch({ type: SET_USER, user: null });
      }
    });
  }, []);

  return (
    <>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />

          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
