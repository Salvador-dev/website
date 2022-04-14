import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import { useTranslation } from "react-i18next"

const Header = () => {
  const [t, i18n] = useTranslation("global");
  
  return (
    <header>
      <div className='lng-container'>
        <a onClick={()=> i18n.changeLanguage("es")} className="es">{t("header.translate1")}</a>
        <a onClick={()=> i18n.changeLanguage("en")} className="en">{t("header.translate2")}</a>
      </div>
      
      <div className="container header__container">
        <h5>{t("header.hello")}</h5>
        <h1>Salvador Villá</h1>
        <h5 className='text-ligth'>{t("header.i-am")}</h5>
        
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>{t("header.scroll")}</a>
        
      </div>
    </header>
  )
}

export default Header