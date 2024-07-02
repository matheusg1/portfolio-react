import apiIcon from '../../../src/img/icon/api-icon.svg';
import databaseIcon from '../../../src/img/icon/database-icon.svg';
import testIcon from '../../../src/img/icon/test-icon.svg';
import webIcon from '../../../src/img/icon/web-icon.svg';
import Titulo from '../Titulo';

export default function ExperienciaDiv() {
    /*<div className="display-2 fw-medium ms-2 ms-sm-5 pt-3 pb-2 pb-md-0">Experiência</div>*/
    return (
        <>
            <div className='min-vh-100 text-white pb-5 d-flex flex-column' id="experiencia">
                <Titulo titulo="Experiência" />
                <div className='d-flex flex-column mt-4 gap-4'>

                    <div className='glass my-auto align-self-center col-11 col-lg-11 col-xl-9 col-xxl-8 fs-4 p-5'>
                        <div className="d-flex flex-column flex-sm-row flex-md-row justify-content-between py-3 mb-xxl-3">
                            <div className="fw-bold d-flex flex-column justify-content-center">
                                <div className=''>Desenvolvedor Fullstack</div>
                                <div className=''>Out 2023 - Hoje</div>
                            </div>
                            <div className='fw-semibold align-self-sm-end'>WeOpen</div>
                        </div>
                        <div className="col-sm-12 mt-3">
                            <div>Ajustes em CRM, com foco na área de chat cliente-operador.</div>
                            <div>Implementação de funcionalidades no CRM.</div>
                            <div>Criação e melhorias de serviços de automação</div>
                            <div>Desenvolvimento e manutenção de APIs REST</div>
                            <div>Desenvolvimento e manutenção de aplicações web e landing pages</div>
                        </div>

                        <div className='d-flex flex-column flex-md-row justify-content-center font-monospace gap-1 gap-md-3 gap-lg-5 my-4 fst-italic'>
                            <div>C#</div>
                            <div>SQL Server</div>
                            <div>Procedures</div>
                            <div>Git</div>
                            <div>jQuery</div>
                            <div>SignalR</div>
                        </div>
                    </div>

                    <div className='glass my-auto align-self-center col-11 col-lg-11 col-xl-9 col-xxl-8 fs-4 p-5'>
                        <div className="d-flex flex-column flex-sm-row flex-md-row justify-content-between py-3 mb-xxl-3">
                            <div className="fw-bold d-flex flex-column justify-content-center">
                                <div className=''>Estágio</div>
                                <div className=''>Desenvolvimento de Sistemas</div>
                                <div className=''>Out 2022 - Out 2023</div>
                            </div>
                            <div className='fw-semibold align-self-sm-end'>Telecall</div>
                        </div>

                        <div className="col-sm-12 mt-3">
                            <p className=''>Melhorei a segurança dos sistemas, prevenindo injeções de SQL através de consultas parametrizadas.</p>
                            <p className=''>Revisei e aprimorei as respostas HTTP, além de expandir a documentação de uma API REST pela qual fui responsável.</p>
                            <p className=''>Criei e aprimorei sistemas de automação, priorizando performance com legibilidade de código, seguindo boas práticas e facilitando manutenção.</p>
                        </div>

                        <div className='d-flex flex-column flex-md-row justify-content-center gap-1 gap-md-3 gap-lg-5 my-4 font-monospace fst-italic'>
                            <div>C#</div>
                            <div>SQL Server</div>
                            <div>Git</div>
                            <div>Javascript</div>
                            <div>Testes</div>
                        </div>
                    </div>
                </div>
                {/* <div className='container d-flex flex-fill'>
                    <div className='d-flex flex-column flex-xl-row pt-sm-3 pt-xl-0'>
                        <div className='glass p-3 my-auto col-12 col-xl-7 col-xxl-8 xb1'>
                            <div className="d-flex flex-column flex-sm-row flex-md-row justify-content-between py-3 mb-xxl-3">
                                <div className="fw-bold d-flex flex-column justify-content-center">
                                    <div className='experiencia-subtitulo'>Estágio</div>
                                    <div className='experiencia-subtitulo'>Desenvolvimento de Sistemas</div>
                                </div>
                                <div className='experiencia-empresa fw-medium align-self-sm-end'>Telecall</div>
                            </div>

                            <div className="experiencia-descricao col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <p className=''>Aprimorei a segurança de sistemas, impedindo injeções de SQL, com o uso de consultas parametrizadas.</p>
                                <p className=''>Revisei e aprimorei as respostas HTTP, além de expandir a documentação de uma API REST pela qual fui responsável.</p>
                                <p className=''>Criei e aprimorei sistemas de automação, priorizando performance com legibilidade de código, seguindo boas práticas e facilitando manutenção.</p>
                            </div>
                        </div>


                        <div className="d-flex flex-column flex-md-row flex-xl-column flex-wrap ms-xl-5 my-auto ">

                            <div className="d-flex align-items-center mb-5 mt-5 mt-xl-0 col-12 col-sm-6 col-xl-12">
                                <img className="vertical-icon me-2 me-xxl-2" src={apiIcon} />
                                <div className="d-flex flex-column align-content-center fs-6 fw-light">
                                    <p className="my-0">Tratamento de respostas HTTP</p>
                                    <p className="my-0">Autenticação baseada em token</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center col-sm-6 col-xl-12">
                                <img className="vertical-icon me-2" src={webIcon} />
                                <div className="d-flex flex-column align-content-center fs-6 fw-light">
                                    <p className="my-0 w-100">Web Apps com ASP.Net</p>
                                    <p className="my-0 w-100">Javascript e jQuery</p>
                                </div>
                            </div>


                            <div className="d-flex align-items-center my-5 col-sm-6 col-xl-12">
                                <img className="vertical-icon me-2" src={databaseIcon} />
                                <div className="d-flex flex-column align-content-center fs-6 fw-light">
                                    <p className="my-0">Operações em SQL</p>
                                    <p className="my-0">Entity Framework</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-4 mb-sm-0 col-sm-6 col-xl-12">
                                <img className="vertical-icon me-2" src={testIcon} />
                                <div className="d-flex flex-column align-content-center fs-6 fw-light">
                                    <p className="my-0">Testes unitários</p>
                                    <p className="my-0">Testes de interface</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div> */}
            </div>
        </>
    )
}