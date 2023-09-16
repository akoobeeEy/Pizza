import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
       <ToastContainer/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index  element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
