import React, { useState } from 'react';
import Titulo from '../Titulo';
import '../../../src/slider.css';
import bootstrapIcon from '../../../src/img/icon/tools/bootstrap-icon.png';
import csharpIcon from '../../../src/img/icon/tools/csharp-icon.png';
import dotnetIcon from '../../../src/img/icon/tools/dotnet-icon.png';
import gitIcon from '../../../src/img/icon/tools/git-icon.png';
import javascriptIcon from '../../../src/img/icon/tools/js-icon.png';
import mysqlIcon from '../../../src/img/icon/tools/mysql-icon.png';
import sqlserverIcon from '../../../src/img/icon/tools/sqlserver-icon.png';

export default function ConhecimentosDiv() {

    const [texto, setTexto] = useState('TextoIcone');
    const [opacidade, setOpacidade] = useState(0);

    const handleMouseOver = (props) => {
        setOpacidade(1);
        setTexto(props)
    }

    const handleMouseLeave = () => {
        setOpacidade(0);
    };
    return (
        <>
            <div className='bg-light text-dark min-vh-100 d-flex flex-column' id="conhecimentos">
                <Titulo titulo="Conhecimentos" />
                <div className='my-auto'>
                    <div className="slider">
                        <div className="slide-track d-flex" onMouseLeave={handleMouseLeave} >
                            <div className="slide">
                                <img id='csharp-icon' onMouseOver={() => handleMouseOver('C#')} src={csharpIcon} />
                            </div>
                            <div className="slide">
                                <img id='dotnet-icon' onMouseOver={() => handleMouseOver('.NET')} src={dotnetIcon} />
                            </div>
                            <div className="slide">
                                <img id='js-icon' onMouseOver={() => handleMouseOver('Javascript')} src={javascriptIcon} />
                            </div>
                            <div className="slide">
                                <img id='bootstrap-icon' onMouseOver={() => handleMouseOver('Bootstrap')} src={bootstrapIcon} />
                            </div>
                            <div className="slide">
                                <img id='git-icon' onMouseOver={() => handleMouseOver('Git')} src={gitIcon} />
                            </div>
                            <div className="slide">
                                <img id='mysql-icon' onMouseOver={() => handleMouseOver('MySQL')} src={mysqlIcon} />
                            </div>
                            <div className="slide">
                                <img id='sqlserver-icon' onMouseOver={() => handleMouseOver('SQL Server')} src={sqlserverIcon} />
                            </div>

                            <div className="slide">
                                <img id='csharp-icon' onMouseOver={() => handleMouseOver('C#')} src={csharpIcon} />
                            </div>
                            <div className="slide">
                                <img id='dotnet-icon' onMouseOver={() => handleMouseOver('.NET')} src={dotnetIcon} />
                            </div>
                            <div className="slide">
                                <img id='js-icon' onMouseOver={() => handleMouseOver('Javascript')} src={javascriptIcon} />
                            </div>
                            <div className="slide">
                                <img id='bootstrap-icon' onMouseOver={() => handleMouseOver('Bootstrap')} src={bootstrapIcon} />
                            </div>
                            <div className="slide">
                                <img id='git-icon' onMouseOver={() => handleMouseOver('Git')} src={gitIcon} />
                            </div>
                            <div className="slide">
                                <img id='mysql-icon' onMouseOver={() => handleMouseOver('MySQL')} src={mysqlIcon} />
                            </div>
                            <div className="slide">
                                <img id='sqlserver-icon' onMouseOver={() => handleMouseOver('SQL Server')} src={sqlserverIcon} />
                            </div>

                        </div>
                    </div>
                    <div id="icon-name" style={{ opacity: opacidade }} className="display-6 fw-medium d-lg-block d-xl-block text-center text-dark mb-5">{texto}</div>
                </div>
            </div>
        </>
    )
}