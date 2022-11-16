import { NavLink } from 'react-router-dom'
import logo from './image/LOGO.png'
export default function Header() {
  return (
    <>
      <header className='header__inner'>
        <div className="container">
          <nav className="navbar">
            <a className='navbar__link' href="#"><img src={logo} alt="LOGO" /></a>
            <ul className="navbar__list">
              <li className="navbar__list__item"><NavLink className='navbar__list__item__li' to="/beranda">Beranda</NavLink></li>
              <li className="navbar__list__item"><NavLink className='navbar__list__item__li' to="/koleksi">Koleksi</NavLink></li>
              <li className="navbar__list__item"><NavLink className='navbar__list__item__li' to="/syarat">Syarat dan Ketentuan</NavLink></li>
              <li className="navbar__list__item"><NavLink className='navbar__list__item__li' to="/kontak">Kontak</NavLink></li>
              <li className="navbar__list__item"><NavLink className="navbar__list__item__link" to="#">Masuk</NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
