import React from 'react'
import Button from '../Button/Button';
import './FigmaCard.scss'

export default function FigmaCard({name, descr, img}) {
  return (
    <div className='card'>
        <img className='card_image' src={img}/>
      <div className='card_info-wrapper'>
        <div className='card_name'>{name}</div>
        <div className='card_descr'>{descr}</div>
        <Button text="FIGMA FILE"/>
      </div>
    </div>
  )
}
