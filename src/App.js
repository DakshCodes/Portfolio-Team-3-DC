import React from "react";
import Header from "./components/Header";
import "./styles/app.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Services from "./components/Service";
import Contect from "./components/Contect";


function App() {
  return (
  <>
    <Header />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/contact" element={<Contect />} />
     <Route path="/services" element={<Services />} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;
