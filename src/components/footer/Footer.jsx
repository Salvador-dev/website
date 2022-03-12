import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import { useTranslation } from "react-i18next"

const Footer = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <footer>
      <a href="#"className='footer__logo'>Salvador-Dev</a>

      <ul className='permalinks'>
        <li><a href="#">{t("footer.home")}</a></li>
        <li><a href="#about">{t("footer.about")}</a></li>
        <li><a href="#experience">{t("footer.exp")}</a></li>
        <li><a href="#services">{t("footer.serv")}</a></li>
        <li><a href="#portfolio">{t("footer.port")}</a></li>
        <li><a href="#testimonials">{t("footer.test")}</a></li>
        <li><a href="#contact">{t("footer.cont")}</a></li>
      </ul>

      {/* <div className="footer__socials">
        <a href="https://facebook.com" target="_blank" ><FaFacebook/></a>
        <a href="https://instagram.com" target="_blank"><FiInstagram/></a>
        <a href="https://twitter.com" target="_blank"><IoLogoTwitter/></a>
      </div> */}

      <div className="footer__copyright">
        <small>&copy; {t("footer.copy")}</small>

      </div>
    
    
    </footer>
  )
}

export default Footer