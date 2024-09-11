import React from 'react'

function Header() {
  return (
    <header className='header'>
    <img src={tkaLogo} alt="total kinetic advantage logo" className='header__logo' />
    <h1 className='header__title'>Total Kinetic Advantage</h1>
    <nav className='header-nav'>
      <ul className='header-nav__list'>
        <li className='header-nave__list-item'>
          HOME
        </li>
        <li className='header-nave__list-item'>
          ABOUT
        </li>
        <li className='header-nave__list-item'>
          CONTACT
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Header