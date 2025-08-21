import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Checkout from './components/Checkout';
import Success from './pages/Success';
import Fail from './pages/Fail';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Checkout/>}/>
                <Route path="/success" element={<Success/>}/>
                <Route path="/fail" element={<Fail/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);