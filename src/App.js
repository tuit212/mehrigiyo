import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Routes , Route } from "react-router-dom";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
