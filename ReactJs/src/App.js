// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pro/Layout";
import Home from "./pro/Home";
import Product from "./pro/Product";
import Products from "./pro/Products";
import Login from "./pro/Login";
import Register from "./pro/Register";
import Contact from "./pro/Contact";
import Profile from "./pro/Profile";
import MyOrders from "./pro/MyOrders";
import BuyNow from "./pro/BuyNow";


const App = () => {    

  return (
    <>


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/products/:id" element={<Product />}></Route>
          <Route path="/products/:pid/buynow" element={<BuyNow />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/orders" element={<MyOrders/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App