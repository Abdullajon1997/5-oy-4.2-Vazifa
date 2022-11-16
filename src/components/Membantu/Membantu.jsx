import React from 'react'
import "./index.scss"
import pojok2 from './../image/pojok__write.png';
import watsap from './../image/whatsapp.png';

export default function Membantu() {
  return (
    <>
      <section className='membantu__section'>
        <div className="container">
          <h2 className='membantu__h2'>Ingin <span className='membantu__h2__span'>Membantu</span> Meningkatkan Literasi Anak-Anak Sekitar Kita?</h2>
          <p className='membantu__p'>Percayakan melalui kegiatan kita</p>
          <div className='membantu__div__link'>
            <a className='membantu__div__links' href="#">Donasi dengan Kami</a>
            <img className='membantu__div__link__img' src={pojok2} alt="rasm" />
          </div>
          <span className='atou'>Atou</span>
          <div className='tel__div'>
            <a className='tel__div__link' href="#">Hubungi Kami</a>
            <img className='tel__div__img' src={watsap} alt="watsap" />
          </div>
        </div>
      </section>
    </>
  )
}
