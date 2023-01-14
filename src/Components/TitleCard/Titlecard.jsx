import React, {useState, useCallback, useEffect} from 'react';
import './Titlecard.scss';

export default function Titlecard() {
    const [currentTitle, setCurrentTitle] = useState('a UI designer');
    const [titleCounter, setTitleCounter] = useState(0)

    const shuffle = useCallback(() => {
        setTitleCounter(titleCounter +1)
        setCurrentTitle(possibleTitles[titleCounter]);
    });
    useEffect(() => {
        const titleInterval = setInterval(shuffle, 3000);
        if(titleCounter === 4) {
            setTitleCounter(1)
        }
        return () => clearInterval(titleInterval);
    }, [shuffle])

    const possibleTitles = ['a UI designer', 'a concept artist', 'a movie geek', 'a UI designer']
  return (
    <div className='titlecard'>
        <div className='titlecard_textbox'>
            <span className='titlecard_header'>Hi there! I'm Lina,</span>
            <span className='titlecard_titles'>{currentTitle}</span>
            <div className='buttonplaceholder'></div>
        </div>
    </div>
  )
}
