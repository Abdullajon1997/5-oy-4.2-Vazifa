import React from 'react'
import "./index.scss"
import ellipse from './../image/Ellipse.png';


export default function Judul() {
    return (
        <>
            <section className='judul__section'>
                <div className="container">
                    <div className='judul'>
                        <div className="judul__inner">
                            <img className='judul__img' src={ellipse} alt="Ellipse" />
                            <div>
                                <h2 className='judul__h2'>500+</h2>
                                <p className='judul__p'>Judul Buku</p>
                            </div>
                        </div>
                        <div className="judul__inner">
                            <img className='judul__img' src={ellipse} alt="Ellipse" />
                            <div>
                                <h2 className='judul__h2'>$0</h2>
                                <p className='judul__p'>Gratis Peminjaman</p>
                            </div>
                        </div>
                        <div className="judul__inner">
                            <img className='judul__img' src={ellipse} alt="Ellipse" />
                            <div>
                                <h2 className='judul__h2'>5</h2>
                                <p className='judul__p'>Kegiatan Rutin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
