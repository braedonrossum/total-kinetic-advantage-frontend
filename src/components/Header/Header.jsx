import "./Header.scss"
import 'animate.css';
import {Link} from "react-router-dom"
import tkaLogo from "../../assets/tka-logo.png"

function Header() {
  return (
    <header className='header'>
      <Link to="/">
    <img src={tkaLogo} alt="total kinetic advantage logo" className='header__logo' />
      </Link>
    <h1 className='header__title'>Total Kinetic Advantage</h1>
    <nav className='header-nav'>
      {/* <ul className='header-nav__list'>
        <Link to="/">
        <li className='header-nave__list-item'>
          HOME
        </li>
        </Link>
        <Link>
        <li className='header-nave__list-item'>
          ABOUT
        </li>
        </Link>
        <Link>
        <li className='header-nave__list-item'>
          CONTACT
        </li>
        </Link>
      </ul> */}
    </nav>
  </header>
  )
}

export default Header