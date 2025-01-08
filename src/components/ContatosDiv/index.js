import { useEffect, useState } from "react";
import Titulo from "../Titulo";
import 'boxicons'

export default function ContatosDiv() {
    const buttonSize = '65px';
    const [elementOpacity, setElementOpacity] = useState(0);
    const [elementTransition, setElementTransition] = useState('opacity 2s ease, transform 1s ease');

    const handleScroll = () => {
        const divElement = document.getElementById('contato');
        if (divElement) {
            const divPosition = divElement.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (divPosition.top <= windowHeight - 300) {
                setElementOpacity(1);
                setElementTransition('opacity 2s ease, transform 1s ease');
            }
            else {
                setElementTransition('none');
                setElementOpacity(0);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <div className='min-vh-100 d-flex flex-column' id="contato">            
                <Titulo titulo="Contatos" />
                <div className="mx-auto my-auto fs-5">
                    <a target='_blank' className="px-1" style={{
                        opacity: elementOpacity,
                        transition: elementTransition
                    }} href='https://www.linkedin.com/in/matheusgs1/'><box-icon size={buttonSize} type='logo' name='linkedin-square' color='#898989'></box-icon></a>
                    <a target='_blank' className="px-1" style={{
                        opacity: elementOpacity,
                        transition: elementTransition
                    }} href='https://github.com/matheusg1'><box-icon size={buttonSize} type='logo' name='github' color='#898989'></box-icon></a>
                    {/* <a target='_blank' className="px-1" style={{
                        opacity: elementOpacity,
                        transition: elementTransition
                    }} href='https://drive.google.com/file/d/1HHZ-8ZVUZHru9oQUjA7AAnBp5RpqEu1O/view?usp=sharing'>
                        <box-icon size='64px' name='file-pdf' type='solid' color='#FFFFFF' ></box-icon>
                    </a> */}
                </div>
            </div>
        </>
    )
}