import "./App.css";
import Header from "./Container/Header/Header";
import Home from "./Container/Home/Home";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Container/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useGlobalContext } from "./Context/Context";

function App() {
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User:>", authUser);
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
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
          <Route path="*" element={<div>Erorr Page</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
