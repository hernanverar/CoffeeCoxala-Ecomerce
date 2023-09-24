import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";

function MyRouteComponent() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="menu" exact element={<Menu />} />
          <Route path="about" exact element={<About />} />
          <Route path="contact" exact element={<Contact />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default MyRouteComponent;

