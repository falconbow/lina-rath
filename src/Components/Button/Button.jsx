import React from 'react'
import './Button.scss';

export default function Button({buttonText}) {
  return (
    <div className='button'>
        <div className='button_circle'></div>
        <div className='button_text'>{buttonText}</div>
    </div>
  )
}
