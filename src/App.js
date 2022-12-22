import React from "react";
//GlobalStyle
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Routes, Route, useLocation } from 'react-router-dom';
//Animation
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav />
      <AnimatePresence>
      <Routes>
      <Route path="/" exact element={<AboutUs />} />
      <Route path="/aboutus" exact element={<AboutUs />} />
      <Route path="/ourwork" exact element={ <OurWork/>} />
      <Route path="/ourwork/:id" exact element={<MovieDetail />} />
      <Route path="/contactus" exact element={<ContactUs />} />
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
