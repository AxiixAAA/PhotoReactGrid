import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { HeaderMenu } from "./components/Header/HeaderMenu/HeaderMenu";
import DesctopPhoto from "././components/Pages/DesctopPhoto";
import { Route, Routes } from 'react-router-dom';


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
                            <Route path="/" element={<DesctopPhoto />}/>
                            <Route path="/desctopPhoto" element={<DesctopPhoto />}/>
                        </Routes>
                    </div>
                </div>
           
        </div>
    );
}

export default App
