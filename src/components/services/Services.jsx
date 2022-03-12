import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import { useTranslation } from "react-i18next"

const Services = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section id='services'>
      <h5>{t("services.h5")}</h5>
      <h2>{t("services.h2")}</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>{t("services.ui")}</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              </ul>

        </article>

        {/* END OF UI/UX */}

        <article className='service'>
          <div className='service__head'>
            <h3>{t("services.web")}</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              </ul>

        </article>

        {/* WEB DEVELOPMENT*/}

        <article className='service'>
          <div className='service__head'>
            <h3>{t("services.cont")}</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              </ul>

        </article>

        {/* END OF CONTENT CREATION*/}


      </div>
      
      
      </section>
  )
}

export default Services