import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { HeaderMenu } from "./components/Header/HeaderMenu/HeaderMenu";
import { Route, Routes, Navigate } from 'react-router-dom';

import DesctopPhoto     from "./components/Pages/DesctopPhoto";
import PhotoTelephone   from "./components/Pages/PhotoTelephone";
import Anime            from "./components/Pages/Anime";


const App = () => {
        
    
    return (
        <div className="app-wrapper">
            <div className='header'>
                <Header />
            </div>
            <div className='wrapper'>
                <div className='menu'>
                    <HeaderMenu />
                </div>
                <div className='pages'>
                    <Routes>
                        <Route path="/desctopPhoto"     element={<DesctopPhoto />}/>
                        <Route path="/" element={<Navigate replace to="/desctopPhoto" />} />
                        <Route path="/photoTelephone"   element={<PhotoTelephone />}/>
                        <Route path="/anime"            element={<Anime />}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App
