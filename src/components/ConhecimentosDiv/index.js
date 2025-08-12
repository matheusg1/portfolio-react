import React from 'react';
import Titulo from '../Titulo';
import '../../../src/slider.css';

export default function ConhecimentosDiv() {
    return (
        <>
            <div className='text-dark d-flex flex-column justify-content-center mb-5 overflow-hidden' id="conhecimentos">
                <Titulo titulo="Conhecimentos" />
                <div className='fs-1 d-flex flex-column flex-md-row justify-content-center'>
                    <div className=''>
                        <div className='mx-5 text-center'>Profissionais</div>
                        <div className='d-flex justify-content-center text-secondary text-center px-4 conhecimentos-icon'>
                            <div className='d-flex flex-column'>
                                <i className="p-3 devicon-dot-net-plain-wordmark"></i>
                                <i className="p-3 devicon-csharp-plain"></i>
                                <i className="p-3 devicon-microsoftsqlserver-plain-wordmark"></i>
                                <i className="p-3 devicon-nodejs-line-wordmark"></i>
                                <i className="p-3 devicon-express-original-wordmark"></i>
                            </div>
                            <div className='d-flex flex-column'>
                                <i className="p-3 devicon-angular-plain-wordmark"></i>
                                <i className="p-3 devicon-primeng-plain"></i>
                                <i className="p-3 devicon-ionic-original-wordmark"></i>
                                <i className="p-3 devicon-react-original-wordmark"></i>
                                <i className="p-3 devicon-jquery-plain-wordmark"></i>
                            </div>
                            <div className='d-flex flex-column'>
                                <i className="p-3 devicon-bootstrap-plain-wordmark"></i>
                                <i className="p-3 devicon-tailwindcss-plain-wordmark"></i>
                                <i className="p-3 devicon-git-plain-wordmark colored"></i>
                            </div>
                        </div>
                    </div>
                    <div className='border-start border-1 border-secondary'>
                        <div className='mx-5 text-center'>Acadêmicos</div>
                        <div className='d-flex justify-content-center text-secondary text-center px-4 conhecimentos-icon'>
                            <i className="p-3 devicon-java-plain-wordmark"></i>
                            <i className="p-3 devicon-php-plain"></i>
                            <i className="p-3 devicon-python-plain-wordmark"></i>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}