import ressignificarImg1 from '../../../src/img/ressignificar/ressignificar-img-1.png';
import ressignificarImg2 from '../../../src/img/ressignificar/ressignificar-img-2.png';
import ressignificarImg3 from '../../../src/img/ressignificar/ressignificar-img-3.png';

import escolarReactImg1 from '../../../src/img/escolar/escolar-react-img-1.png';
import escolarReactImg2 from '../../../src/img/escolar/escolar-react-img-2.png';
import escolarReactImg3 from '../../../src/img/escolar/escolar-react-img-3.png';

import escolarApiImg1 from '../../../src/img/escolar/escolar-api-img-1.png';
import escolarApiImg2 from '../../../src/img/escolar/escolar-api-img-2.png';
import Titulo from '../Titulo';

export default function ProjetosDiv() {
    return (
        <div className='bg-secondary-subtle min-vh-100 text-dark' id="projetos">
            <Titulo titulo="Projetos" />
            <div className='container-fluid'>
                <div className="d-flex flex-column align-items-center justify-content-center flex-lg-row mt-lg-5">
                    <div id="carouselRessignificar" className="carousel carousel-dark slide col-md-10 col-lg-5 col-xl-4">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselRessignificar" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselRessignificar" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselRessignificar" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src={ressignificarImg1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="10000">
                                <img src={ressignificarImg2} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="10000">
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
                    <div className="d-flex flex-column justify-content-between col-12 col-md-10 col-lg-6 col-xl-6 col-xxl-7 ps-lg-3 mt-3 mt-xl-0">
                        <div className=''>
                            <div className='d-flex justify-content-between'>
                                <div className="fw-semibold">
                                    <a target="_blank" className='projetos-titulo link-dark fw-bold' href="https://projeto-ressignificar.vercel.app">Projeto Ressignificar</a>
                                </div>
                                <a target="_blank" href="https://github.com/matheusg1/projeto-ressignificar" type="button" className="border-0 rounded-1 btn btn-outline-dark">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github mt-xl-1" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="projetos-subtitulo fw-bold">Web App - React</div>
                        </div>
                        <div className='projetos-descricao'>
                            <p className="">
                                Site desenvolvido para o Projeto Ressignificar, que oferece auxílio psicológico e nutricional de acordo com as condições dos pacientes e promove acessibilidade a esse tipo de atendimento.
                            </p>
                            <div className="container-fluid">
                                <div className="row flex-row overflow-auto text-center flex-nowrap align-items-center">
                                    <div className="m-3 scrollbar-item bg-dark-subtle rounded-pill col-12 col-md-6 col-lg-8 col-xl-7 col-xxl-6">Design minimalista e padronizado</div>
                                    <div className="m-3 scrollbar-item bg-dark-subtle rounded-pill col-5 col-md-3 col-lg-4 col-xl-3">Responsivo</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pb-5 d-flex flex-column align-items-center justify-content-center flex-lg-row">
                    <div id="carouselEscolaApi" className="carousel carousel-dark slide col-md-10 col-lg-5 col-xl-4">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselEscolaApi" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselEscolaApi" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src={escolarApiImg1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={escolarApiImg2} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselEscolaApi" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselEscolaApi" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className="d-flex flex-column col-12 col-md-10 col-lg-6 col-xl-6 col-xxl-7 ps-lg-3 mt-3 mt-xl-0">
                        <div>
                            <div className="d-flex justify-content-between">
                                <div className="projetos-titulo fw-bold">Instituto Jurema de Ensino</div>
                                <a target="_blank" href="https://github.com/matheusg1/escola-db-api" type="button" className="border-0 rounded-1 btn btn-outline-dark">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github mt-xl-1" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="projetos-subtitulo fw-bold">REST API - C#</div>
                        </div>
                        <p className="projetos-descricao">
                            API que permite o gerenciamento de informações de turmas/matérias/alunos relacionadas a uma escola.
                        </p>
                        <div className="container-fluid">
                            <div className="row flex-row overflow-auto text-center flex-nowrap align-items-center">
                                <div className="m-3 scrollbar-item bg-dark-subtle rounded-pill col-11 col-md-6 col-lg-7 col-xl-6">Autenticação via Token JWT</div>
                                <div className="m-3 scrollbar-item bg-dark-subtle rounded-pill col-6 col-md-4 col-lg-4 col-xl-3">Assincronismo</div>
                                <div className="m-3 scrollbar-item bg-dark-subtle rounded-pill col-12 col-md-6 col-lg-7 col-xl-6">Documentação com Swagger</div>
                                <div className="m-3 scrollbar-item bg-dark-subtle rounded-pill col-5 col-md-3 col-lg-4 col-xl-3">SQL Server</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pb-5 d-flex flex-column align-items-center justify-content-center flex-lg-row">
                    <div id="carouselEscolaReact" className="carousel carousel-dark slide col-md-10 col-lg-5 col-xl-4">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselEscolaReact" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselEscolaReact" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselEscolaReact" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src={escolarReactImg1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                                <img src={escolarReactImg2} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                                <img src={escolarReactImg3} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselEscolaReact" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselEscolaReact" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className="d-flex flex-column col-12 col-md-10 col-lg-6 col-xl-6 col-xxl-7 ps-lg-3 mt-3 mt-xl-0">
                        <div>
                            <div className="d-flex justify-content-between">
                                <div className="projetos-titulo fw-bold">Instituto Jurema de Ensino</div>
                                <a target="_blank" href="https://github.com/matheusg1/projeto-escola-app-react" type="button" className="border-0 rounded-1 btn btn-outline-dark">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github mt-xl-1" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                    </svg>
                                </a>
                            </div>
                            <div className="projetos-subtitulo fw-bold">Web App - React</div>
                        </div>
                        <p className="projetos-descricao">
                            Aplicação web criada para consumir a API.
                        </p>
                        <div className="container-fluid">
                            <div className="row flex-row overflow-auto text-center flex-nowrap align-items-center">
                                <div className="fs-6 m-3 scrollbar-item bg-dark-subtle rounded-pill col-6 col-md-4 col-lg-4 col-xl-3">Responsivo</div>
                            </div>
                        </div>
                    </div>
                </div>





            </div>






        </div>
    )
}