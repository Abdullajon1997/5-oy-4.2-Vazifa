import React from 'react'
import "./index.scss"

import one from './../image/one__img.png';
import two from './../image/two__img.png';
import three from './../image/three__img.png';
import four from './../image/four__img.png';
import five from './../image/five__img.png';
import six from './../image/six__img.png';
import seven from './../image/seven__img.png';

export default function Totto() {
  return (
    <div>
      <section className='totto-chan__section'>
        <div className="container">
          <div className='totto-chan'>

            <div className='left'>
              <div className='left__left'>
                <img className='one' src={one} alt="one" />
                <img className='two' src={two} alt="two" />
              </div>
              <img className='three' src={three} alt="three" />
            </div>
            <img className='four' src={four} alt="four" />
            <div className='right'>
              <img className='five' src={five} alt="five" />
              <div className='right__right'>
                <img className='six' src={six} alt="six" />
                <img className='seven' src={seven} alt="seven" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
