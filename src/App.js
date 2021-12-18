import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { SidebarClosed } from './components/Sidebar/SidebarClosed/SidebarClosed';

const App = () => {
        
    
    return (
        <div>
            
            <div className='app-wrapper-container'>
                <Header />
                <SidebarClosed />
            </div>
        </div>
    );
}

export default App