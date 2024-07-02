import React, { useState } from 'react';
import Titulo from '../Titulo';
import '../../../src/slider.css';
import ConhecimentosItem from '../ConhecimentosItem';

export default function ConhecimentosDiv() {
    return (
        <>
            <div className='text-dark min-vh-100 d-flex flex-column' id="conhecimentos">
                <Titulo titulo="Conhecimentos" />
                <div className='d-flex flex-wrap justify-content-center justify-content-md-start col-12 ps-0 ps-md-5 mt-4 gap-2 gap-md-4'>
                    <ConhecimentosItem
                        imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-plain.svg"
                        name=".NET"
                    />
                    <ConhecimentosItem
                        imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
                        name="SQL" />
                    <ConhecimentosItem
                        imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                        name="React" />
                    <ConhecimentosItem
                        imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                        name="Bootstrap" />
                    <ConhecimentosItem
                        imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg"
                        name="jQuery" />
                    <ConhecimentosItem
                        imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                        name="Git" />
                </div>
                <div className='display-6 fw-bold ms-2 ms-sm-5 py-3 mt-3 mb-3'>
                    Também já criei projetos com
                </div>
                <div className='col-12 d-flex flex-wrap justify-content-center justify-content-md-start ps-0 ps-md-5 gap-2 gap-md-4 mb-5'>
                    <ConhecimentosItem imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
                        name="Angular" />
                    <ConhecimentosItem imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg"
                        name="Ionic" />
                    <ConhecimentosItem imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                        name="Java" />
                    <ConhecimentosItem imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                        name="PHP" />
                </div>
            </div >
        </>
    )
}