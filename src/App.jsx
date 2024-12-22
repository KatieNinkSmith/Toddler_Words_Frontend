import { Route, Routes } from "react-router";
import Nav from "./components/Nav.jsx";
import Welcome from "./pages/Welcome";
import Animals from "./pages/Animals";
import Food from "./pages/Food";
import Colors from "./pages/Colors";
import Places from "./pages/Places";
import Counting from "./pages/Counting";
import Footer from "./components/Footer.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/food" element={<Food />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/places" element={<Places />} />
        <Route path="/counting" element={<Counting />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
