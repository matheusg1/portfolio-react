import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from './components/Navbar';

import imgMat from '../src/img/img-mat-1.jpg';
import ProjetosDiv from './components/ProjetosDiv';
import ExperienciasDiv from './components/ExperienciasDiv';
import ConhecimentosDiv from './components/ConhecimentosDiv';


function App() {

    return (
        <>
            <div className='min-vh-100 pb-xl-5' id='main'>
                <Navbar />

                <div
                    className="container d-flex flex-column flex-md-column flex-sm-column flex-lg-row align-items-center justify-content-around py-0 py-xxl-5 mt-md-2 mt-lg-5 mt-xl-0 mt-xxl-3">

                    <div className='col-11 col-sm-8 col-md-5 col-lg-4 col-xl-4 col-xxl-4 text-center my-lg-5 my-xl-3 my-xxl-5'>
                        <img className="img-fluid" width='400' src={imgMat} />
                    </div>

                    <div className="mt-0 mt-sm-0 mt-4 mt-lg-5 mt-xl-3 mt-xxl-5 d-flex flex-column text-white">
                        <div className="display-1 fw-light">Matheus</div>
                        <div className="display-1 fw-light text-end">Gomes</div>
                        <div className="display-6 fw-normal text-center">Desenvolvedor Full Stack</div>
                    </div>

                </div>
            </div>

            <ConhecimentosDiv />
            <ExperienciasDiv />
            <ProjetosDiv />

        </>
    );
}

export default App;