import React from 'react';
import '../../../src/slider.css';

export default function ConhecimentosItem({ imgSrc, name }) {

    return (
        <div className='icon-img text-center mx-5'>
            <img className='' src={imgSrc} />
            <div className='text-center mt-2 fw-medium fs-5'>{name}</div>
        </div>

    )
}