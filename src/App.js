import React from "react";
import HeroBanner from "./components/HeroBanner";
import AboutUs from "./components/AboutUs";
import FeaturedProducts from "./components/FeaturedProducts";
import Testimonials from "./components/Testimonials";
import EmailSignup from "./components/EmailSignup";
import Footer from "./components/Footer";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBanner />
      <FeaturedProducts />
      <AboutUs />
      <Testimonials />
      <EmailSignup />
      <Footer />
    </div>
  );
}

export default App;
