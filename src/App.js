import "./App.css";
import Nav from "./components/Nav";
import React from "react";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Videos from "./pages/Videos";
import Contact from "./pages/Contact";
import Copyright from "./components/Copyright";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/videos" exact element={<Videos />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <Copyright />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
