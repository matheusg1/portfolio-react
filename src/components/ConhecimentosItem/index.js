import React from 'react';
import '../../../src/slider.css';

export default function ConhecimentosItem({ imgSrc, name }) {

    return (
        <div className='conhecimentos-div p-4 p-md-5 text-center'>
            <img className='icon-img' src={imgSrc} />
            <div className='text-center mt-4 fw-medium fs-5'>{name}</div>
        </div>

    )
}