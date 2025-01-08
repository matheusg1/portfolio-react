import ressignificarImg1 from '../../../src/img/ressignificar/ressignificar-img-1.png';
import ressignificarImg2 from '../../../src/img/ressignificar/ressignificar-img-2.png';
import ressignificarImg3 from '../../../src/img/ressignificar/ressignificar-img-3.png';

import falarsalvaImg1 from '../../../src/img/falarsalva/falarsalva1.jpg';
import falarsalvaImg2 from '../../../src/img/falarsalva/falarsalva2.jpg';

import escolarReactImg1 from '../../../src/img/escolar/escolar-react-img-1.png';
import escolarReactImg2 from '../../../src/img/escolar/escolar-react-img-2.png';
import escolarReactImg3 from '../../../src/img/escolar/escolar-react-img-3.png';

import escolarApiImg1 from '../../../src/img/escolar/escolar-api-img-1.png';
import escolarApiImg2 from '../../../src/img/escolar/escolar-api-img-2.png';
import Titulo from '../Titulo';
import DescricaoProjeto from '../DescricaoProjeto';

export default function ProjetosDiv() {
    return (
        <>
            <div className='min-vh-100 text-dark d-flex flex-column justify-content-center mb-sm-5' id="projetos">
                <Titulo titulo="Projetos" />
                <div className='d-flex flex-column gap-5 col-11 col-sm-9 col-md-5 col-lg-5 col-xl-4 col-xxl-3 align-self-center py-5'>
                    <div className="d-flex flex-column card-projeto rounded-1 w-100">
                        <div id="carouselRessignificar" className="carousel carousel-dark slide w-100">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselRessignificar" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselRessignificar" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselRessignificar" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner rounded-top rounded-1">
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
                        <DescricaoProjeto
                            titulo="Projeto Ressignificar"
                            subtitulo="Web App - React"
                            descricao="Site desenvolvido para o Projeto Ressignificar, que oferece auxílio psicológico e nutricional de acordo com as condições dos pacientes e promove acessibilidade a esse tipo de atendimento."
                            linkGithub="https://github.com/matheusg1/projeto-ressignificar"
                            linkSite="https://ressignificar.vercel.app/"
                            caracteristicas={['Integrado a duas APIs', 'Autenticação e banco de dados com Supabase', 'Criado seguindo padrões de acessibilidade', 'Responsivo', 'PostgreSQL', 'Bootstrap']}
                        />
                    </div>

                    <div className="d-flex flex-column card-projeto rounded-1 w-100">
                        <div id="carouselFalarSalva" className="carousel carousel-dark slide w-100">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselFalarSalva" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselFalarSalva" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                {/* <button type="button" data-bs-target="#carouselFalarSalva" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
                            </div>
                            <div className="carousel-inner rounded-top rounded-1">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <img src={falarsalvaImg1} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item" data-bs-interval="10000">
                                    <img src={falarsalvaImg2} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselFalarSalva" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselFalarSalva" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <DescricaoProjeto
                            titulo="Falar Salva"
                            subtitulo="Web App - React"
                            descricao="Após criar o site para o Ressignificar, conheci a psicóloga Jéssica Rubatino, fundadora do Falar Salva, um projeto que, assim como o Ressignificar, oferece auxílio psicológico a valores acessíveis."
                            linkSite="https://falarsalva.com.br"
                            caracteristicas={['Responsivo', 'Bootstrap', 'Criado seguindo padrões de acessibilidade']}
                        />
                    </div>

                    <div className="d-flex flex-column card-projeto rounded-1 w-100">
                        <div id="carouselEscolaApi" className="carousel carousel-dark slide w-100">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselEscolaApi" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselEscolaApi" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                            <div className="carousel-inner rounded-top rounded-1">
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
                        <DescricaoProjeto
                            titulo="Instituto Jurema de Ensino"
                            subtitulo="REST API - C#"
                            descricao="API que permite o gerenciamento de informações de turmas/matérias/alunos relacionadas a uma escola."
                            linkGithub="https://github.com/matheusg1/escola-db-api"
                            caracteristicas={['Autenticação via Token JWT', 'Requisições assíncronas', 'Documentação com Swagger', 'SQL Server']}
                        />
                    </div>

                    <div className="d-flex flex-column card-projeto rounded-1 w-100">
                        <div id="carouselEscolaReact" className="carousel carousel-dark slide w-100">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselEscolaReact" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselEscolaReact" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselEscolaReact" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner rounded-top rounded-1">
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

                        <DescricaoProjeto
                            titulo="Instituto Jurema de Ensino"
                            subtitulo="Web App - React"
                            descricao="Aplicação web criada para consumir a API."
                            linkGithub="https://github.com/matheusg1/projeto-escola-app-react"
                            caracteristicas={['Responsivo']}
                        />
                    </div>
                </div>
                {/* <div className='d-flex flex-column align-self-center flex-lg-row col-6'>
                    <div className="d-flex flex-column card-projeto rounded-1 w-100">
                        <div id="carouselEscolaApi" className="carousel carousel-dark slide w-100">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselEscolaApi" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselEscolaApi" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                            <div className="carousel-inner rounded-top rounded-1">
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
                        <DescricaoProjeto
                            titulo="Instituto Jurema de Ensino"
                            subtitulo="REST API - C#"
                            descricao="API que permite o gerenciamento de informações de turmas/matérias/alunos relacionadas a uma escola."
                            linkGithub="https://github.com/matheusg1/escola-db-api"
                            caracteristicas={['Autenticação via Token JWT', 'Requisições assíncronas', 'Documentação com Swagger', 'SQL Server']}
                        />
                    </div>

                    <div className="d-flex flex-column card-projeto rounded-1 w-100">
                        <div id="carouselEscolaReact" className="carousel carousel-dark slide w-100">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselEscolaReact" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselEscolaReact" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselEscolaReact" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner rounded-top rounded-1">
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

                        <DescricaoProjeto
                            titulo="Instituto Jurema de Ensino"
                            subtitulo="Web App - React"
                            descricao="Aplicação web criada para consumir a API."
                            linkGithub="https://github.com/matheusg1/projeto-escola-app-react"
                            caracteristicas={['Responsivo']}
                        />
                    </div>
                </div> */}
            </div>
        </>
    )
}