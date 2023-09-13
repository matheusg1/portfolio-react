import react from 'react';

export default function DescricaoProjeto({ titulo, subtitulo, descricao, caracteristicas, linkGithub, linkSite }) {

    return (
        <div className="d-flex flex-column justify-content-between col-12 col-md-10 col-lg-6 col-xl-6 col-xxl-7 ps-lg-3 mt-3 mt-xl-0" >
            <div className=''>
                <div className='d-flex justify-content-between'>
                    <div className="fw-semibold">
                        <p className='projetos-titulo fw-bold' href="https://projeto-ressignificar.vercel.app">{titulo}, {subtitulo}</p>
                    </div>
                    <div className='icons'>
                        {linkSite ?
                            <a href={linkSite} target='_blank' className='me-sm-4'>
                                <box-icon size="sm" name='up-arrow-alt'></box-icon>
                            </a> : ""}                    
                        <a href={linkGithub} target='_blank' className=''>
                            <box-icon href={linkGithub} size="sm" name='code-alt'></box-icon>
                        </a>
                    </div>
                </div>

            </div>
            <div className='projetos-descricao'>
                <p className="ps-3 ps-sm-4 border-start border-secondary fs-5">
                    {descricao}
                </p>
                <div className='col-12 d-flex flex-wrap fs-6 fw-semibold justify-content-start'>
                    {caracteristicas ? caracteristicas.map(c => (
                        <div key={c} className="m-1 px-4 bg-secondary-subtle">{c}</div>
                    )) : ""}
                </div>
            </div>
        </div>
    )
}