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
                <div className='container d-flex flex-fill'>
                    <div className='d-flex flex-column flex-xl-row'>
                        <div className='glass p-3 my-auto col-12 col-xl-7 col-xxl-8'>
                            <div className="d-flex flex-column flex-sm-row flex-md-row justify-content-between py-3 mb-xxl-3">
                                <div className="fs-4 fw-bold d-flex flex-column justify-content-center pt-lg-5 pt-xl-0 pt-xxl-0 ">
                                    <div className=''>Estágio</div>
                                    <div className=''>Desenvolvimento de Sistemas</div>
                                </div>
                                <div className='fs-1 fw-medium align-self-sm-end'>Telecall</div>
                            </div>

                            <div className="fs-5 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
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
                </div>
            </div>
        </>
    )
}