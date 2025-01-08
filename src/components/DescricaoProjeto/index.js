import react from 'react';

export default function DescricaoProjeto({ titulo, subtitulo, descricao, caracteristicas, linkGithub, linkSite }) {

    return (
        <div className="d-flex flex-column justify-content-between texto-cinza" >
            
                <div className='d-flex justify-content-between px-2'>
                    <div className='projetos-titulo fw-bold py-2'>{titulo}, {subtitulo}</div>
                    <div className='d-flex gap-2 mt-2'>
                        {linkSite ?
                            <a href={linkSite} target='_blank' className=''>
                                <box-icon size="sm" color='#898989' name='up-arrow-alt'></box-icon>
                            </a> : ""}
                        {linkGithub ?
                            <a href={linkGithub} target='_blank' className=''>
                                <box-icon href={linkGithub} size="sm" color='#898989' name='code-alt'></box-icon>
                            </a> : ""}
                    </div>        
            </div>
            <div className='fs-7 d-flex flex-column mb-3'>
                <p className="px-2 ">
                    {descricao}
                </p>
                <div className='d-flex gap-1 flex-wrap fw-medium px-2'>
                    {caracteristicas ? caracteristicas.map(c => (
                        <div key={c} className="px-2 mb-1 custom-border">{c}</div>
                    )) : ""}
                </div>
            </div>
        </div>
    )
}