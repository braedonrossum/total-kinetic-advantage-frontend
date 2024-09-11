import "./Footer.scss"

function Footer() {
  return (
    <div className='footer'>
      <h3 className='footer__title'>Total Kinetic Advantage &copy;2024</h3>
      <section>
        <h4>Contact</h4>
        <ul className='footer__list'>
          <li className='footer__list-item'>
            Braedon Rossum
          </li>
          <li onClick={(e) => {window.location.href ='mailto:tka@gmail.com';}} className='footer__list-item'>
            Email
          </li>
          <li>

          </li>
        </ul>
      </section>

    </div>
  )
}

export default Footer