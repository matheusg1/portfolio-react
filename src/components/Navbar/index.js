import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="navbar d-vh navbar-expand d-none d-sm-block bg-transparent" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav text-center">
                            <li className="nav-item px-xl-5">
                                <a className="nav-link fs-5" href="#conhecimentos">Conhecimentos</a>
                            </li>
                            <li className="nav-item px-xl-4">
                                <a className="nav-link fs-5" href="#experiencias">Experiências</a>
                            </li>
                            <li className="nav-item px-xl-4">
                                <a className="nav-link fs-5" href="#projetos">Projetos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}