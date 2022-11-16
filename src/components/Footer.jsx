import instagram from './image/instagram.png';
import fecbook from './image/fecbook.png';
import video from './image/video.png';
import logo__footer from './image/logo__footer.png';
import footer__c from './image/footer__c.png';




function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer__inner">
            <div className=''>
              <div className='footer__div'>
                <a className='footer__logo' href="#"><img className='footer__logo' src={logo__footer} alt="logo" /></a>
                <h2 className=''>Pojok Baca Probolinggo</h2>
              </div>
              <ul className='footer__list'>
                <li className='footer__list__item'><a className='footer__list__item' href="#"><img src={instagram} alt="" /></a></li>
                <li className='footer__list__item'><a className='footer__list__item' href="#"><img src={fecbook} alt="" /></a></li>
                <li className='footer__list__item'><a className='footer__list__item' href="#"><img src={video} alt="" /></a></li>
              </ul>
            </div>
            <ul className='footer__lists'>
              <li className='footer__lists__item'><a className='footer__lists__item' href="#">Kontak</a>
                <ul className='footer__listes'>
                  <li className='footer__listes__item'><a className='footer__listes__item' href="#">Email</a></li>
                  <li className='footer__listes__item'><a className='footer__listes__item' href="#">Alamat</a></li>
                  <li className='footer__listes__item'><a className='footer__listes__item' href="#">No. Rekening</a></li>
                </ul>
              </li>
              <li className='footer__lists__item'><a className='footer__lists__item' href="#">Tentang Kami</a>
                <ul className='footer__listes'>
                  <li className='footer__listes__item'><a className='footer__listes__item' href="#">Umum</a></li>
                </ul>
              </li>
              <li className='footer__lists__item'><a className='footer__lists__item' href="#">Galery</a>
                <ul className='footer__listes'>
                  <li className='footer__listes__item'><a className='footer__listes__item' href="#">Kegiatan 2018</a></li>
                  <li className='footer__listes__item'><a className='footer__listes__item' href="#">Kegiatan 2019</a></li>
                  <li className='footer__listes__item'><a className='footer__listes__item' href="#">Kegiatan 2020</a></li>
                  <li className='footer__listes__item'><a className='footer__listes__item' href="#">Kegiatan 2021</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer__c'>
          <img src={footer__c} alt="" />
          <p className='footer__c__p'>Pojok Baca Probolinggo 2022</p>
        </div>
      </footer>
    </>
  )
}

export default Footer