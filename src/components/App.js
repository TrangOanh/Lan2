import React from "react";
import "./../css/App.css";
import Nav from "./Nav";
import Footer from "./Footer";
// import thêm các package để điều hướng 
import DieuHuong from "../Router/DieuHuong";
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="container">
        <Nav></Nav>
        <DieuHuong></DieuHuong>
        <Footer></Footer>
      </div>
    </Router>
  );
}
export default App;
