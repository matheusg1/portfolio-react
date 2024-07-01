import React, { useState } from 'react';
import Titulo from '../Titulo';
import '../../../src/slider.css';
import ConhecimentosItem from '../ConhecimentosItem';

export default function ConhecimentosDiv() {



    return (
        <>
            <div className='bg-light text-dark min-vh-100 d-flex flex-column' id="conhecimentos">
                <Titulo titulo="Conhecimentos" />
                <div className='col-12 ps-5 d-flex'>
                    <ConhecimentosItem
                        imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-plain.svg"
                        name=".NET"
                    ></ConhecimentosItem>
                    <ConhecimentosItem
                        imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
                        name="SQL"></ConhecimentosItem>
                    <ConhecimentosItem
                        imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                        name="React"></ConhecimentosItem>
                    <ConhecimentosItem
                        imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                        name="Bootstrap"></ConhecimentosItem>
                    <ConhecimentosItem
                        imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg"
                        name="jQuery"></ConhecimentosItem>
                    <ConhecimentosItem
                        imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                        name="Git"></ConhecimentosItem>
                </div>
                <div className='display-6 fw-bold ms-2 ms-sm-5 py-3 mt-5'>
                    Já criei projetos com...
                </div>
                <div className='col-12 ps-5 d-flex'>
                    <ConhecimentosItem imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                    name="PHP"></ConhecimentosItem>
                    <ConhecimentosItem imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                    name="Java"></ConhecimentosItem>
                    <ConhecimentosItem imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg"
                    name="Ionic"></ConhecimentosItem>
                    <ConhecimentosItem imgSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
                    name="Angular"></ConhecimentosItem>
                </div>
            </div >
        </>
    )
}