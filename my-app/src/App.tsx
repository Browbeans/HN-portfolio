import React from 'react';
import './App.css';
import './fonts.css';
import { StartPage } from './pages/StartPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <StartPage />
            </div>
        </BrowserRouter>
    );
}

export default App;
