import React from 'react'
import "./index.scss"
import pojok from './../image/pojok__link.png';
import search from './../image/search.png';


export default function Pokoj() {
  return (
    <>
      <section className='pokoj__section'>
        <div className="container">
          <div className="pojok">
            <p className="pojok__p">Pojok Baca <span className="pojok__p__span">Probolinggo</span></p>
            <h1 className="pojok__h1">Pinjam Buku Secara <span className="pojok__h1__span">Gratis</span> untuk Masyarakat</h1>
            <div className='pojok__div'>
              <div className="pojok__div__search">
                <a className='pojok__search' href="#">Cari Judul Buku</a>
                <img src={search} alt="" />
              </div>
              <div className='pojok__link'>
                <a className="pojok__links" href="#">Donasi dengan Kami</a>
                <img src={pojok} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
