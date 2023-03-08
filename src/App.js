import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Routes , Route } from "react-router-dom";
import Main from "./components/main/Main";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
