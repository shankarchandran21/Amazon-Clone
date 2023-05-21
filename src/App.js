import "./App.css";
import Header from "./Container/Header/Header";
import Home from "./Container/Home/Home";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Container/Checkout/Checkout";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<h1>LOGIN PAGE</h1>} />
          <Route path="*" element={<div>Erorr Page</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
