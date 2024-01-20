import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Choice from "./components/Choice";
import Support from "./components/Support";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="relative mx-auto min-h-screen max-w-[1500px]">
      <Navbar />
      <Hero />
      <Choice />
      <Testimonial />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
