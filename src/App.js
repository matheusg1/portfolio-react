import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import ProjetosDiv from './components/ProjetosDiv';
import ExperienciaDiv from './components/ExperienciaDiv';
import ConhecimentosDiv from './components/ConhecimentosDiv';
import MainDiv from './components/MainDiv';
import ContatosDiv from './components/ContatosDiv';


function App() {

    return (
        <>            
            <MainDiv />
            <ConhecimentosDiv />
            <ExperienciaDiv />
            <ProjetosDiv />
            <ContatosDiv />

        </>
    );
}

export default App;