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
          {/* Add more Routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default MyRouteComponent;

