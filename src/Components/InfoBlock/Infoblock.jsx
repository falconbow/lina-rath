import React from 'react';
import FigmaCard from '../FigmaCard/FigmaCard';
import './Infoblock.scss';

export default function Infoblock({name, type, contents}) {
    console.log(contents, 'contnets')
  return (
    <div className='infoblock'>
        <div className='infoblock_heading'>{name}</div>
        <div className='infoblock_content'>
            { type === 0 ? 
            contents.map(item => <FigmaCard name={item.name} descr={item.descr} img={item.img}/>)
            :
            <div>1</div>
            }
        </div>
    </div>
  )
}
