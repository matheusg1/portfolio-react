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
        <div className='bg-secondary-subtle min-vh-100 text-dark' id="projetos">
            <Titulo titulo="Projetos" />
            <div className='container-fluid'>
                <div className="pb-5 d-flex flex-column align-items-center align-items-lg-start justify-content-center flex-lg-row">
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
                    <DescricaoProjeto
                        titulo="Projeto Ressignificar"
                        subtitulo="Web App - React"
                        descricao="Site desenvolvido para o Projeto Ressignificar, que oferece auxílio psicológico e nutricional de acordo com as condições dos pacientes e promove acessibilidade a esse tipo de atendimento."
                        linkGithub="https://github.com/matheusg1/projeto-ressignificar"
                        linkSite="https://ressignificar.vercel.app/"
                        caracteristicas={['Integrado a duas APIs', 'Autenticação e banco de dados com Supabase', 'Criado seguindo padrões de acessibilidade', 'Responsivo', 'PostgreSQL', 'Bootstrap']}
                    />
                </div>

                <div className="pb-5 d-flex flex-column align-items-center align-items-lg-start justify-content-center flex-lg-row">
                    <div id="carouselFalarSalva" className="carousel carousel-dark slide col-md-10 col-lg-5 col-xl-4">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselFalarSalva" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselFalarSalva" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselFalarSalva" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
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
                        caracteristicas={['Responsivo', 'Criado seguindo padrões de acessibilidade', 'Bootstrap']}
                    />
                </div>

                <div className="pb-5 d-flex flex-column align-items-center align-items-lg-start justify-content-center flex-lg-row">
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
                    <DescricaoProjeto
                        titulo="Instituto Jurema de Ensino"
                        subtitulo="REST API - C#"
                        descricao="API que permite o gerenciamento de informações de turmas/matérias/alunos relacionadas a uma escola."
                        linkGithub="https://github.com/matheusg1/escola-db-api"
                        caracteristicas={['Autenticação via Token JWT', 'Requisições assíncronas', 'Documentação com Swagger', 'SQL Server']}
                    />
                </div>

                <div className="pb-5 d-flex flex-column align-items-center align-items-lg-start justify-content-center flex-lg-row">
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

                    <DescricaoProjeto
                        titulo="Instituto Jurema de Ensino"
                        subtitulo="Web App - React"
                        descricao="Aplicação web criada para consumir a API."
                        linkGithub="https://github.com/matheusg1/projeto-escola-app-react"
                        caracteristicas={['Responsivo']}
                    />
                </div>
            </div>
        </div>
    )
}