import "./Header.scss"
import 'animate.css';
import {Link} from "react-router-dom"
import tkaLogo from "../../assets/tka-logo.png"
import tkaLogoWhite from "../../assets/tka-logo-white.png"

function Header() {
  return (
    <header className='header'>
      <Link to="/">
    <img src={tkaLogo} alt="total kinetic advantage logo" className='header__logo' onMouseEnter={e => e.currentTarget.src = tkaLogoWhite}
    onMouseLeave={e => e.currentTarget.src = tkaLogo}/>
      </Link>
    <h1 className='header__title'>Total Kinetic Advantage</h1>
    <nav className='header-nav'>
    </nav>
  </header>
  )
}

export default Header