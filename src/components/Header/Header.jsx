import "./Header.scss"
import 'animate.css';
import {Link} from "react-router-dom"
import tkaLogo from "../../assets/tka-logo.png"
import tkaLogoWhite from "../../assets/tka-logo-white.png"
import { NavLink } from "react-router-dom";
import { useState } from "react";


function Header() {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseLeave = () => {
    setIsHovered(true);
  };

  return (
    <header className='header'>
      <Link to="/">
        <div 
          className="header__logo-container"
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => setIsHovered(false)}
        >
          <img
            src={tkaLogoWhite}
            alt="total kinetic advantage logo"
            className="header__logo"
          />
          <h1 className="header__title">
            T<span className={`span ${isHovered ? 'reverse' : ''}`}>otal</span> <br />
            K<span className={`span ${isHovered ? 'reverse' : ''}`}>inetic</span> <br />
            A<span className={`span ${isHovered ? 'reverse' : ''}`}>dvantage</span>
          </h1>
        </div>
      </Link>
    <nav className='header-nav'>
              <NavLink to="/" className="header-nav__link">
                <button className="header-nav__button">Program Generator</button>
              </NavLink>
              <NavLink to="/body" className="header-nav__link">
                <button className="header-nav__button">Exercise Library</button>
              </NavLink>
              <NavLink to="/program" className="header-nav__link">
                <button className="header-nav__button header-nav__button--program">My Program</button>
              </NavLink>
    </nav>
  </header>
  )
}

export default Header