import React from 'react'
import "./index.scss"
import anak from './../image/anak.png';
import rutin from './../image/rutin.png';
import korban from './../image/korban.png';

export default function Basa() {
    return (
        <>
            <section className='basa__section'>
                <div className="container">
                    <div className="basa__inner">
                        <div>
                            <h2 className='basa__h2'>Kegiatan Pojok Baca Probolinggo</h2>
                            <p className='basa__p'>Intip kegiatan yang telah kami selenggarakan </p>
                        </div>
                        <p className='basa__p2'>Selengkapnya</p>
                    </div>
                    <div className='basa'>
                        <img src={anak} alt="img" />
                        <img src={rutin} alt="img" />
                        <img src={korban} alt="img" />
                    </div>
                </div>
            </section>
        </>
    )
}
