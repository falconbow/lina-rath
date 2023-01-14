import React from 'react'
import './Header.scss'

export default function Header() {
    const anchors = [
        {text: 'UI Design'},
        {text: 'Theater Concepts'},
        {text: 'Exhibitions'},
        {text: 'Event Concepts'},
        {text: 'Lighting Design'},
        {text: 'Contact'},
    ]
  return (
    <div className='header'>
        <div className='logo'>
            <div className='logo_eye'/>
        </div>
        <div className='header_links'>
        {anchors.map(anchor => <div>{anchor.text}</div>)}
        </div>
    </div>
  )
}
