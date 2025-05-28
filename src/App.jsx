
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { menuItems } from "./data/MenuItems";
import { About } from "./pages/About";
import Contact from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { ScrollToTop } from "./components/ScrollToTop.jsx";
import Opportunities from "./pages/Opportunities";

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar menuItems={menuItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer menuItems={menuItems} />
    </BrowserRouter>
  );
}

export default App;
