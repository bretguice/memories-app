import React from 'react';
import { Container } from '@material-ui/core';
import {  GoogleOAuthProvider } from '@react-oauth/google';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';


const App = () => {
 
    return(
        <BrowserRouter>
        <Container maxidth="lg">
            <Navbar />
            <GoogleOAuthProvider clientId='636139791510-22pas2t4lphqs4ue4pd6icuade3pqt5r.apps.googleusercontent.com' >
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/auth' exact element={<Auth />} />    
            </Routes>   
            </GoogleOAuthProvider> 
        </Container>
        </BrowserRouter>
    );
}

export default App;