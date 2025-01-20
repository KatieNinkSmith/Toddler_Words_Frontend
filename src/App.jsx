import { Route, Routes } from "react-router";
import { useState } from "react";

import Nav from "./components/Nav.jsx";
import Welcome from "./pages/Welcome";
import LoginSignup from "./pages/UserSignInUpPage";
import UserProfile from "./pages/UserProfile.jsx";
import Footer from "./components/Footer.jsx";
import { getUser } from "./utilities/users-services";

import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/loginsignup" element={<LoginSignup />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
