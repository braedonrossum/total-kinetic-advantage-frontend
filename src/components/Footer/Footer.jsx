import { Link } from "react-router-dom";
import "./Footer.scss"

function Footer() {
  return (
    <div className='footer'>
      <section>
        <ul className='footer__list'>
        <p>Connect With Us</p>
          <li onClick={(e) => {window.location.href ='mailto:braedon.tka@gmail.com';}} className='footer__list-item-email'>
            Email
          </li>
          <Link to={"https://www.youtube.com/playlist?list=PLnGqH8V263Zon4V1wSIbr5sjjW1_NHUHq"}>
          <li>
            Youtube
          </li>
          </Link>
          <Link to={"https://www.instagram.com/tkafit/"}>
          <li>
            Instagram
          </li>
          </Link>
        </ul>
      </section>
      <h3 className='footer__title'>Total Kinetic Advantage &copy;2024</h3>

    </div>
  )
}

export default Footer