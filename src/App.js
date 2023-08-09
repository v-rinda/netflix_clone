import React from 'react';
import "./App.css";
import ScrollToTop from './component/ScroolToTop/ScrollToTop';
import Footer from './component/Tabs/Footer/Footer';
import Home from "./pages/Home";
import NetFlixShow from "./pages/NetFlixShow";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/netflix-show" element={<NetFlixShow />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
