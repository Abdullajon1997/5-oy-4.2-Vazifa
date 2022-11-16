import React from 'react'
import "./index.scss"
import eight from './../image/eight.png';
import nine from './../image/nine.png';

export default function Kita() {
  return (
    <>
      <section className='kita__section'>
        <div className="container">
          <div className="kita">
            <h2 className='kita__h2'>Kenapa Kita <span className='kita__h2__span'>Harus</span> Membaca Buku?</h2>
            <div className="kita__inner">
              <div className='card'>
                <p className='card__p'>“Aku rela dipenjara asalkan <span className='card__p__span'>bersama buku </span>, karena dengan buku <br /> <span className='card__p__span'>aku bebas</span> ”</p>
                <div className='card__inner'>
                  <img className='card__img' src={eight} alt="seven" />
                  <div>
                    <h3 className='card__h3'>Mohammad Hatta</h3>
                    <p className='card__p2'>Wakil Presiden Indonesia Pertama</p>
                  </div>
                </div>
              </div>
              <div className='card'>
                <p className='card__p'>“Cuma perlu <span className='card__p__span'>satu buku</span> untuk jatuh cinta pada membaca, Cari Buku itu! <span className='card__p__span'>Mari jatuh cinta!</span></p>
                <div className='card__inner'>
                  <img className='card__img' src={nine} alt="seven" />
                  <div>
                    <h3 className='card__h3'>Najwa Shihab</h3>
                    <p className='card__p2'>Duta Membaca</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
