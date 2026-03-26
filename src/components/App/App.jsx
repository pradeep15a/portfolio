import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './../Home/Home';
import About from './../About/About';
import Projects from './../Projects/Projects';
import Skills from './../Skills/Skills';
import Contact from './../Contact/Contact'


import './App.css'
import NavBar from "../NavBar/NavBar";
import GoHome from "../GetHome/GetHome";




const App = () => {
    return (
        <div>
            <HashRouter>
                <div>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                    <GoHome />
                </div>
            </HashRouter>
        </div>
    );
};

export default App;
