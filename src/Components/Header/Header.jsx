import React from 'react';
import './Header.scss';
import {projectStructure} from '../../utils/api.js';

export default function Header() {

  return (
    <div className='header'>
        <div className='logo'>
            <div className='logo_eye'/>
        </div>
        <div className='header_links'>
        {projectStructure.map(block => <div>{block.name}</div>)}
        </div>
    </div>
  )
}
