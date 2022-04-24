import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import Topbar from "./components/Topbar";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar></Topbar>
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/works" element={<Works />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <About></About> */}
    </div>
  );
}

export default App;
