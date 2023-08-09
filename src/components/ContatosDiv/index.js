import { useEffect, useState } from "react";
import Titulo from "../Titulo";
import 'boxicons'

export default function ContatosDiv() {
    const buttonSize = '70px';
    const [elementOpacity, setElementOpacity] = useState(0);

    const handleScroll = () => {
        const divElement = document.getElementById('contato');
        if (divElement) {
          const divPosition = divElement.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          if (divPosition.top <= windowHeight - 300) {
            console.log('Aqui quero que o elemento apareça');
            setElementOpacity(1); 
          }
          else{
            setElementOpacity(0);
            console.log('Aqui quero que o elemento suma');
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
            <div className='min-vh-100 text-white pb-5 d-flex flex-column' id="contato">
                <Titulo titulo="Contatos" />
                <div className="mx-auto my-auto">
                    <a target='_blank' className='item-contato' style={{opacity: elementOpacity}} href='https://www.linkedin.com/in/matheusgs1/'><box-icon size={buttonSize} type='logo' name='linkedin-square' color='#FFFFFF'></box-icon></a>
                    <a target='_blank' className='item-contato' style={{opacity: elementOpacity}} href='https://github.com/matheusg1'><box-icon size={buttonSize} type='logo' name='github' color='#FFFFFF'></box-icon></a>
                </div>
            </div>
        </>
    )
}