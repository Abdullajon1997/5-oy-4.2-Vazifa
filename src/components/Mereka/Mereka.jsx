import React from 'react'
import "./index.scss"
import eleven from './../image/eleven.png';
import pixsel from './../image/pixsel.png';
import pixsel2 from './../image/pixsel2.png';
import twelve from './../image/twelve.png';


export default function Mereka() {
  return (
    <>
      <section className='mereka__section'>
        <div className="container">
          <div className="mereka">
            <div className="mereka__inner">
              <div>
                <h2 className='mereka__h2'>Apa Kata Mereka?</h2>
                <p className='mereka__p'>Mereka yang telah menjadi pengunjung tetap kami</p>
              </div>
              <p className='mereka__p2'>Selengkapnya</p>
            </div>

            <div className="mereka__end">
              <div className='wrapper'>
                <p className='wrapper__p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <div className='wrapper__out'>
                  <img src={eleven} alt="eleven" />
                  <div>
                    <h3 className='wrapper__h3'>Guy Hawkins</h3>
                    <p className='wrapper__p2'>32 Tahun, Karyawan</p>
                  </div>
                </div>
              </div>


              <div className='wrapper'>
                <p className='wrapper__p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <div className='wrapper__out'>
                  <img src={twelve} alt="eleven" />
                  <div>
                    <h3 className='wrapper__h3'>Brooklyn Simmons</h3>
                    <p className='wrapper__p2'>20 Tahun, Mahasiswa</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='pixsel'>
              <img src={pixsel} alt="pixsel" />
              <img src={pixsel2} alt="pixsel" />
              <img src={pixsel2} alt="pixsel" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
