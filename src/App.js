import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Routes , Route } from "react-router-dom";
import Main from "./components/main/Main";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import React from "react";
import { useState } from "react";
import Cart from "./pages/Cart/Cart";

function App() {

  // const [show , setShow] = useState(true)
  const [cart , setCart] = useState([])


  const handleClick = (item) => {
    console.log(item);
  }


  return (
    <div className="App">
      <React.Fragment>
        <Header />
        <Routes>
          <Route path="/" element={<Main size={cart.length}  handleClick={handleClick} />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/card" element={<Cart/>} />
        </Routes>
        <Footer/>
      </React.Fragment>
    </div>
  );
}

export default App;
