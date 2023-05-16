import "./App.css";
import Header from "./Container/Header/Header";
import Home from "./Container/Home/Home";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Container/Checkout/Checkout";

function App() {
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
          <Route path="*" element={<div>Erorr Page</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
