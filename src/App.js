import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import AllFood from "./Component/AllFood/AllFood";
import Login from "./Component/Login/Login"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/AllFood" element={<AllFood/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
