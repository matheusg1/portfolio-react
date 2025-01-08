import Titulo from '../Titulo';

export default function ExperienciaDiv() {
    return (
        <>
            <div className='min-vh-100 text-white pb-sm-5 d-flex flex-column' id="experiencia">
                <Titulo titulo="Experiência" />
                <div className='d-flex flex-column'>
                    <div className='my-auto align-self-center col-11 col-md-7 col-lg-5 fs-4 py-5 texto-cinza'>
                        <div className="d-flex flex-column flex-sm-row flex-md-row justify-content-between fw-bold texto-cinza-escuro">
                            <div className=''>Desenvolvedor Fullstack | Out 2023 - Nov 2024 | WeOpen</div>
                        </div>
                        <div className="mt-3 fs-5">
                            <div>Implementação de funcionalidades no CRM.</div>
                            <div>Desenvolvimento e manutenção de APIs REST</div>
                            <div>Criação e melhorias de serviços de automação</div>
                            <div>Desenvolvimento e manutenção de chat em tempo real</div>
                            <div>Ajustes em CRM, com foco na área de chat cliente-operador.</div>
                            <div>Desenvolvimento e manutenção de aplicações web e landing pages</div>
                        </div>

                        <div className='d-flex flex-column flex-xl-row justify-content-center gap-xl-4 my-4 font-monospace fst-italic'>
                            <div>C#</div>
                            <div>SQL Server</div>
                            <div>Procedures</div>
                            <div>Git</div>
                            <div>jQuery</div>
                            <div>SignalR</div>
                        </div>
                    </div>

                    <div className='my-auto align-self-center col-11 col-md-7 col-lg-5 fs-4 pt-5 texto-cinza border-top border-1 border-secondary'>
                        <div className="d-flex flex-column flex-sm-row flex-md-row justify-content-between py-3 mb-xxl-3">
                            <div className="d-flex flex-column flex-sm-row flex-md-row justify-content-between fw-bold texto-cinza-escuro">
                                <div className=''>Estágio em Dev. | Out 2022 - Out 2023 | Telecall</div>
                            </div>
                        </div>
                        <div className="mt-3 fs-5">
                            <div className=''>Melhorei a segurança dos sistemas, prevenindo injeções de SQL através de consultas parametrizadas.</div>
                            <div className=''>Revisei e aprimorei as respostas HTTP, além de expandir a documentação de uma API REST pela qual fui responsável.</div>
                            <div className=''>Criei e aprimorei sistemas de automação, priorizando performance com legibilidade de código, seguindo boas práticas e facilitando manutenção.</div>
                        </div>

                        <div className='d-flex flex-column flex-xl-row justify-content-center gap-xl-4 my-4 font-monospace fst-italic'>
                            <div>C#</div>
                            <div>SQL Server</div>
                            <div>Git</div>
                            <div>Javascript</div>
                            <div>Testes</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}