import React from "react";
import "./pages/styles/Menu.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
// import CartItem from "./components/CartItem";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Crud from "./pages/Crud";

function App() {


  // const [{ cart, total }, dispatch] = useStateValue();
  // const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div className="photo">
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/crud" exact element={<Crud />} />
          <Route path="about" exact element={<About />} />
          <Route path="contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    </div>
  );
}

export default App;