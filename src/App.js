import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from './components/Navbar';

import ProjetosDiv from './components/ProjetosDiv';
import ExperienciasDiv from './components/ExperienciasDiv';
import ConhecimentosDiv from './components/ConhecimentosDiv';
import MainDiv from './components/MainDiv';


function App() {

    return (
        <>            
            <MainDiv />
            <ConhecimentosDiv />
            <ExperienciasDiv />
            <ProjetosDiv />

        </>
    );
}

export default App;