import apiIcon from '../../../src/img/icon/api-icon.svg';
import databaseIcon from '../../../src/img/icon/database-icon.svg';
import testIcon from '../../../src/img/icon/test-icon.svg';
import webIcon from '../../../src/img/icon/web-icon.svg';

export default function ExperienciasDiv() {
    return (
        <div className='bg-secondary min-vh-100 text-dark pb-5' id="experiencias" >
            
            <div className="display-1 fw-medium ms-2 ms-sm-5 pt-3 pb-2 pb-md-5">Experiência</div>

            <div className='container'>
                <div className='d-flex flex-column flex-xxl-row'>
                    <div className='my-auto div1 col-12 col-xxl-8'>
                        <div className="d-flex flex-column flex-sm-row flex-md-row justify-content-between py-3 mb-xxl-3">
                            <div className="fs-5 d-flex flex-column justify-content-center pt-lg-5 pt-xl-0 pt-xxl-0">
                                <div className='fs-3 fw-bold'>Estágio</div>
                                <div className='fs-3 fw-bold'>Desenvolvimento de Sistemas</div>
                            </div>
                            <div className='display-4 fw-semibold align-self-sm-end'>Telecall</div>
                        </div>

                        <div className="fs-5 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <p className='fs-3'>Aprimorei a segurança de sistemas, impedindo injeções de SQL, com o uso de consultas
                                parametrizadas.</p>
                            <p className='fs-3'>Adequei respostas HTTP e ampliei a documentação de uma API REST da qual sou o
                                responsável.</p>
                            <p className='fs-3'>Aprimorei a legibilidade de códigos de sistemas automatizados, seguindo boas práticas e
                                facilitando
                                manutenção.</p>
                        </div>
                    </div>

                    <div className='ms-xxl-5 my-auto div2 col-12 col-xxl-4'>
                        <div className="d-flex flex-column flex-md-row flex-xxl-column">
                            <div className='col-12 col-md-6 col-xxl-12 py-xxl-0'>
                                <div className="d-flex align-items-center my-5">
                                    <img className="vertical-icon me-2 me-xxl-2" src={apiIcon} />
                                    <div className="d-flex flex-column align-content-center fs-6 fw-semibold">
                                        <p className="my-0">Tratamento de respostas HTTP</p>
                                        <p className="my-0">Autenticação baseada em token</p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center">
                                    <img className="vertical-icon me-2" src={webIcon} />
                                    <div className="d-flex flex-column align-content-center fs-6 fw-semibold">
                                        <p className="my-0 w-100">Web Apps com ASP.Net</p>
                                        <p className="my-0 w-100">Javascript e jQuery</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-xxl-12 py-xxl-0'>
                                <div className="d-flex align-items-center justify-content-lg-center justify-content-xl-center justify-content-xxl-start my-5">
                                    <img className="vertical-icon me-2" src={databaseIcon} />
                                    <div className="d-flex flex-column align-content-center fs-6 fw-semibold">
                                        <p className="my-0">Operações em SQL</p>
                                        <p className="my-0">Entity Framework</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-lg-center  justify-content-xl-center justify-content-xxl-start mb-4 mb-sm-0">
                                    <img className="vertical-icon me-2" src={testIcon} />
                                    <div className="d-flex flex-column align-content-center fs-6 fw-semibold">
                                        <p className="my-0">Testes unitários</p>
                                        <p className="my-0">Testes de interface</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}