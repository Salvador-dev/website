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
            <h3>{t("services.ui.ui0")}</h3>
            </div>

            <ul className='service__list'>
              <li>
                <p>{t("services.ui.ui3")}</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>{t("services.ui.ui4")}</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>{t("services.ui.ui5")}</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>{t("services.ui.ui6")}</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>{t("services.ui.ui7")}</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>{t("services.ui.ui8")}</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>{t("services.ui.ui9")}</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>{t("services.ui.ui10")}</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>{t("services.ui.ui11")}</p>
              </li>
              
              </ul>

        </article>

        {/* END OF 1ST SERVICE CARD */}

        <article className='service'>
          <div className='service__head'>
            <h3>{t("services.web.web0")}</h3>
            </div>

            <ul className='service__list'>
              <li>
                <p>{t("services.web.web1")}</p>
              </li>
              <li>
                <p>{t("services.web.web2")}</p>
              </li>
              <li>
                <p>{t("services.web.web3")}</p>
              </li>
              
              </ul>

        </article>

        {/* END OF 2ND SERVICE CARD*/}

        <article className='service'>
          <div className='service__head'>
            <h3>{t("services.cont.cont0")}</h3>
            </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>{t("services.cont.cont1")}</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>{t("services.cont.cont2")}</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>{t("services.cont.cont3")}</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>{t("services.cont.cont4")}</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>{t("services.cont.cont5")}</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>{t("services.cont.cont6")}</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>{t("services.cont.cont7")}</p>
              </li>
              
              </ul>

        </article>

        {/* END OF 3RD SERVICE CARD*/}


      </div>
      
      
      </section>
  )
}

export default Services