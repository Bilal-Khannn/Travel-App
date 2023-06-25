import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Landing from "./Pages/Landing";
import Footer from "./components/Footer";
import Itinerary from "./Pages/Itinerary";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/itinerary" element={<Itinerary />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
