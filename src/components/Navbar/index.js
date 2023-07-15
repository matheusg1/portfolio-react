import React, { useState } from 'react'

export default function Navbar() {
    const navItens = document.querySelectorAll('.nav-link')
    const [isMouseOver, setIsMouseOver] = useState(false)


    const handleMouseEnter = () => {
        setIsMouseOver(true);
    }
    const handleMouseLeave = () => {
        setIsMouseOver(false);
    }


    /*
        navItens.forEach(e => {
            e.addEventListener('mouseover', function () {
                e.classList.add('border-bottom border-light');
            });
        })
    
        function testea() {
            console.log('AAUDU')
            //e.classList.add('border-bottom border-light');
        }*/

    return (
        <nav className="navbar d-vh navbar-expand d-none d-sm-block bg-transparent" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav text-center fw-lighter">
                        <li className="nav-item px-xl-5">
                            <a className={`nav-link fs-5 text-white`} href="#conhecimentos">Conhecimentos</a>
                        </li>
                        <li className="nav-item px-xl-4">
                            <a className="nav-link fs-5 text-white" href="#experiencia">Experiência</a>
                        </li>
                        <li className="nav-item px-xl-4">
                            <a className="nav-link fs-5 text-white" href="#projetos">Projetos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}