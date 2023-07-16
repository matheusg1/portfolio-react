import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import ProjetosDiv from './components/ProjetosDiv';
import ExperienciaDiv from './components/ExperienciaDiv';
import ConhecimentosDiv from './components/ConhecimentosDiv';
import MainDiv from './components/MainDiv';


function App() {

    return (
        <>            
            <MainDiv />
            <ConhecimentosDiv />
            <ExperienciaDiv />
            <ProjetosDiv />

        </>
    );
}

export default App;