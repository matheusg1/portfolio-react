import ressignificarImg1 from '../../../src/img/ressignificar/ressignificar-img-1.png';
import ressignificarImg2 from '../../../src/img/ressignificar/ressignificar-img-2.png';
import ressignificarImg3 from '../../../src/img/ressignificar/ressignificar-img-3.png';


import escolarImg1 from '../../../src/img/escolar/escolar-img-1.png';
import escolarImg2 from '../../../src/img/escolar/escolar-img-2.png';
import escolarImg3 from '../../../src/img/escolar/escolar-img-3.png';

export default function ProjetosDiv() {
    return (
        <div className='bg-secondary-subtle min-vh-100 text-dark' id="projetos">
            <div className="display-1 fw-medium ms-2 ms-sm-5 pt-3 pb-5">Projetos</div>
            <div className='container'>
                <div className="d-flex flex-column flex-xl-row">
                    <div id="carouselRessignificar" className="carousel carousel-dark slide col-xl-4">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselRessignificar" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselRessignificar" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselRessignificar" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="5000">
                                <img src={ressignificarImg1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={ressignificarImg2} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={ressignificarImg3} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselRessignificar" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselRessignificar" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="d-flex flex-column justify-content-between col-12 col-xl-7 col-xxl-7 ps-xl-3 mt-3 mt-xl-0">
                        <div>
                            <div className='d-flex justify-content-between'>
                                <div className="fs-3 fw-semibold"><a target="_blank" className='link-dark' href="https://projeto-ressignificar.vercel.app">Projeto Ressignificar</a></div>
                                <button type="button" className="border-0 rounded-1 btn btn-outline-dark pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="fs-3 fw-medium">Web App - React</div>
                        </div>
                        <p className="fs-6">
                            Site desenvolvido para o Projeto Ressignificar, que oferece auxílio psicológico e nutricional de acordo com as condições dos pacientes e promove acessibilidade a esse tipo de atendimento.
                        </p>
                        <div className="container">
                            <div className="row flex-row overflow-auto text-center flex-nowrap align-items-center">
                                <div className="fs-6 m-3 scrollbar-item bg-dark-subtle rounded-pill col-12 col-md-6 col-lg-5 col-xl-7 col-xxl-6">Design minimalista e padronizado</div>
                                <div className="fs-6 m-3 scrollbar-item bg-dark-subtle rounded-pill col-5 col-md-3 col-lg-2 col-xl-3">Responsivo</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-5 d-flex flex-column flex-xl-row">
                    <div id="carouselExampleDark" className="carousel carousel-dark slide col-xl-4">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src={escolarImg1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={escolarImg2} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={escolarImg3} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className="d-flex flex-column justify-content-between col-12 col-xl-7 col-xxl-7 ps-xl-3 mt-3 mt-xl-0">
                        <div>
                            <div class="d-flex justify-content-between">
                                <div class="fs-3 fw-semibold">Sistema escolar
                                </div>
                                <button type="button" class="border-0 rounded-1 btn btn-outline-dark pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="fs-3 fw-semibold">REST API - C#</div>
                        </div>
                        <p className="fs-6">
                            API que permite o gerenciamento de informações de turmas/matérias/alunos relacionadas a uma escola.
                        </p>
                        <div className="container">
                            <div className="row flex-row overflow-auto text-center flex-nowrap align-items-center">
                                <div className="fs-6 m-3 scrollbar-item bg-dark-subtle rounded-pill col-11 col-md-6 col-lg-5 col-xl-6">Autenticação via Token JWT</div>
                                <div className="fs-6 m-3 scrollbar-item bg-dark-subtle rounded-pill col-6 col-md-4 col-lg-3 col-xl-3">Assincronismo</div>
                                <div className="fs-6 m-3 scrollbar-item bg-dark-subtle rounded-pill col-12 col-md-6 col-lg-5 col-xl-6">Documentação com Swagger</div>
                                <div className="fs-6 m-3 scrollbar-item bg-dark-subtle rounded-pill col-5 col-md-3 col-lg-2 col-xl-3">SQL Server</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}