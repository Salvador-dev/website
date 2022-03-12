import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { useTranslation } from "react-i18next"

const About = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section id='about'>
      <h5>{t("about.h5")}</h5>
      <h2>{t("about.h2")}</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward classNamw="about__icon"/>
              <h5>{t("about.exp")}</h5>
              <small>{t("about.work")}</small>

            </article>

            <article className='about__card'>
              <FiUsers classNamw="about__icon"/>
              <h5>{t("about.clients")}</h5>
              <small>{t("about.wrldw")}</small>

            </article>

            <article className='about__card'>
              <VscFolderLibrary classNamw="about__icon"/>
              <h5>{t("about.prj")}</h5>
              <small>{t("about.proj")}</small>

            </article>
            </div>

            <p>
            {t("about.p")}
            </p>

            <a href="#contact" className='btn btn-primary'>{t("about.talk")}</a>

          </div>

        </div>

      </section>
  )
}

export default About