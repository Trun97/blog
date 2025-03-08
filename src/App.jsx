import React from "react";
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home.jsx';
import Nav from './pages/Nav/Nav.jsx';
import Overzichtspagina from './pages/Overzichtspagina/Overzichtspagina.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import NewPost from './pages/NewPost/NewPost.jsx';
import BlogPost from "./components/BlogPost/BlogPost.jsx";


function App() {
    return (
        <>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/overzichtspagina" element={<Overzichtspagina/>} />
                <Route path="/newpost" element={<NewPost/>} />
                <Route path="*" element={<NotFound/>} />
                <Route path="/posts/:id" element={<BlogPost />} />
            </Routes>
        </>
    )
}

export default App
