import React from 'react'

export default function Navbar() {

    return (
        <nav className="navbar d-vh navbar-expand d-none d-md-block bg-transparent" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center mt-4" id="navbarNav">
                    <ul className="navbar-nav text-center fw-lighter d-flex gap-1">
                        <li className="nav-item px-xl-4">
                            <a className={`nav-link fs-5 border-start border-end rounded-pill texto-cinza custom-border-navitem`} href="#conhecimentos">Conhecimentos</a>
                        </li>
                        <li className="nav-item px-xl-4">
                            <a className="nav-link fs-5 border-start border-end rounded-pill texto-cinza custom-border-navitem" href="#experiencia">Experiência</a>
                        </li>
                        <li className="nav-item px-xl-4">
                            <a className="nav-link fs-5 border-start border-end rounded-pill texto-cinza custom-border-navitem" href="#projetos">Projetos</a>
                        </li>
                        <li className="nav-item px-xl-4">
                            <a className="nav-link fs-5 border-start border-end rounded-pill texto-cinza custom-border-navitem" href="#contato">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}