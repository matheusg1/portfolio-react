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
                        <div className='d-flex flex-column text-secondary text-center gap-2 px-4 conhecimentos-icon'>
                            <div className='col-12 d-flex justify-content-center gap-3'>
                                <i className="p-3 devicon-dot-net-plain-wordmark"></i>
                                <i className="p-3 devicon-microsoftsqlserver-plain-wordmark"></i>
                            </div>
                            <div className='col-12 d-flex justify-content-center gap-3'>
                                <i className="p-3 devicon-bootstrap-plain-wordmark"></i>
                                <i className="p-3 devicon-jquery-plain-wordmark"></i>
                            </div>
                            <div className='col-12 d-flex justify-content-center gap-3'>
                                <i className="p-3 devicon-react-original-wordmark"></i>
                                <i className="p-3 devicon-git-plain-wordmark"></i>
                            </div>
                        </div>
                    </div>
                    <div className='border-start border-1 border-secondary'>
                        <div className='mx-5 text-center'>Acadêmicos</div>
                        <div className='d-flex flex-column text-secondary text-center gap-2 px-4 conhecimentos-icon'>
                            <div className='col-12 d-flex justify-content-center gap-3'>
                                <i className="devicon-angular-plain-wordmark"></i>
                                <i className="devicon-ionic-original-wordmark"></i>
                            </div>
                            <div className='col-12 d-flex justify-content-center gap-3'>
                                <i className="devicon-java-plain-wordmark"></i>
                                <i className="devicon-php-plain"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}