import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { HeaderMenu } from "./components/Header/HeaderMenu/HeaderMenu";
import OllPhoto  from '././components/Pages/OllPhoto';
import { Route, Routes } from 'react-router-dom';


const App = () => {
        
    
    return (
        <div className="app-wrapper">
            <div>
                <Header />
            </div>
            <div className='Content'>
                
                <div><HeaderMenu /></div>

                <div className='ssss'>
                    <Routes>
                        <Route path="/" element={<OllPhoto />}/>
                        <Route path="/ollPhoto" element={<OllPhoto />}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App
