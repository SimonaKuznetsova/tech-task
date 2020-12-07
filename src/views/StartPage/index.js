import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import YalantisLogo from 'icons/YalantisLogo'
import 'styles/components/StartPage.scss'

function StartPage() {
  useEffect(() => {
    console.log('start page')
  }, [])
  return (
    <div className='start'>
      <div className='start__title'>
            <h2 className='start__title__text'>Made with love for</h2>
            <YalantisLogo />
        </div>

        <Link to='/employees' className='start__link'>
            Click for start
        </Link>
    </div>
  );
}

export default StartPage;
