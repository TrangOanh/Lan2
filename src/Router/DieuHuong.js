import React,{Component} from "react";
// import thêm các package để điều hướng 
import {Route, Routes} from 'react-router-dom'
import Contact from "../components/Contact";
import Home from "../components/Home";
import News from "../components/News";
import NewDetail from "../components/NewDetail";
class DieuHuong extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/tin-tuc/:slug.:id.html" element={<NewDetail/>}/>
            </Routes>
        );
    }
}
export default DieuHuong;
