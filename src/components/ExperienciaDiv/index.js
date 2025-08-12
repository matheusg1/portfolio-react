import Titulo from '../Titulo';

export default function ExperienciaDiv() {
    return (
        <>
            <div className='min-vh-100 text-white pb-sm-5 d-flex flex-column' id="experiencia">
                <Titulo titulo="Experiência" />
                <div className='d-flex flex-column'>
                    <div className='my-auto align-self-center col-11 col-md-7 col-lg-6 fs-4 py-5 texto-cinza'>
                        <div className="d-flex flex-column flex-sm-row flex-md-row justify-content-between fw-bold texto-cinza-escuro">
                            <div className=''>Desenvolvedor Fullstack | Out 2023 - Nov 2024 | WeOpen</div>
                        </div>
                        <div className="mt-3 fs-5">
                            <div>Implementação de funcionalidades em <strong>CRM</strong> e <strong>APIs REST</strong> com utilização de <strong>ORMs</strong> </div>
                            <hr className='green' />
                            <div>Desenvolvimento e manutenção de <strong>aplicações web</strong>, <strong>landing pages</strong> e <strong>Windows Services</strong> </div>
                            <hr className='green' />
                            <div>Correção de bugs e melhorias em <strong>chat</strong> operador-cliente (<strong>backend e interface</strong>) </div>
                            <hr className='green' />
                            <div>Refiz um chat utilizando <strong>WebSocket</strong> e <strong></strong>Webhooks, reduzindo a carga de consultas ao banco </div>
                            <hr className='green' />
                            <div><strong>Levantamento de requisitos</strong> e atuação na arquitetura e <strong>integração</strong> de <strong>microsserviços</strong></div>
                            <hr className='green' />
                        </div>

                    </div>

                    <div className='my-auto align-self-center col-11 col-md-7 col-lg-6 fs-4 pt-3 texto-cinza '>
                        <div className="d-flex flex-column flex-sm-row flex-md-row justify-content-between py-3 mb-xxl-3">
                            <div className="d-flex flex-column flex-sm-row flex-md-row justify-content-between fw-bold texto-cinza-escuro">
                                <div className=''>Estágio em Dev. | Out 2022 - Out 2023 | Telecall</div>
                            </div>
                        </div>
                        <div className="mt-3 fs-5">
                            <div>Atualizei módulos em <strong>sistemas legado</strong> e realizei manutenção/documentação de <strong>APIs REST</strong> </div>
                            <hr className='green' />
                            <div>Desenvolvi e fiz manutenção em <strong>sistemas web</strong> e <strong>Windows Services</strong> </div>
                            <hr className='green' />
                            <div>Implementei funcionalidades em uma <strong>CPaaS</strong> containerizada com <strong>Docker</strong> </div>
                            <hr className='green' />
                            <div>Corrigi vulnerabilidades críticas em <strong>consultas SQL</strong>, evitando exposição de dados sensíveis em sistemas legado </div>
                            <hr className='green' />
                            <div>Desenvolvi <strong>dashboards</strong> interativos e ferramentas de <strong>geração de arquivos (CSV/PDF)</strong>, otimizando rotinas de análise de dados e exportação de relatórios</div>
                            <hr className='green' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}