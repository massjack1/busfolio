import React from "react";
//GlobalStyle
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUS from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
//Router
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav />
      <Routes>
      <Route path="/" exact element={<AboutUs />} />
      <Route path="/aboutus" exact element={<AboutUs />} />
      <Route path="/ourwork" exact element={ <OurWork/>} />
      <Route path="/contactus" exact element={<ContactUS />} />
      </Routes>
    </div>
  );
}

export default App;
