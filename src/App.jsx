import { Route, Routes } from "react-router";
import { useState } from "react";

import Nav from "./components/Nav.jsx";
import Welcome from "./pages/Welcome";
import InteractiveWords from "./pages/InteractiveWords";
import LoginSignup from "./pages/UserSignInUpPage";
import UserProfile from "./pages/UserProfile.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/interactivewords/:selectedCategory"
          element={<InteractiveWords />}
        />
        <Route path="/loginsignup" element={<LoginSignup />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
