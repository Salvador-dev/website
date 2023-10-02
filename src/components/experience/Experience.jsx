import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import { useTranslation } from "react-i18next"

const Experience = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section id='experience'>
      <h5>{t("experience.h5")}</h5>
      <h2>{t("experience.h2")}</h2>

      <div className='container experience__container'>

        <div className="experience__frontend">
          <h3>{t("experience.front")}</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>{t("experience.html")}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>{t("experience.css")}</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>{t("experience.js")}</small>
                </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>React</h4>
                  <small className='text-light'>{t("experience.react")}</small>
                </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>WordPress</h4>
                  <small className='text-light'>{t("experience.wp")}</small>
                </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Angular</h4>
                  <small className='text-light'>{t("experience.boot")}</small>
                </div>
            </article>

          </div>
        </div>

        <div className="experience__backend">
          <h3>{t("experience.back")}</h3>
          <div className="experience__content">

            {/* <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JSON</h4>
                <small className='text-light'>{t("experience.node")}</small>
              </div>
            </article> */}

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>{t("experience.mysql")}</small>
              </div>
            </article>

            {/* <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Phyton</h4>
                <small className='text-light'>{t("experience.phy")}</small>
              </div>
            </article> */}

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>GIT</h4>
                <small className='text-light'>{t("experience.wp")}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>C/C++</h4>
                <small className='text-light'>{t("experience.wp")}</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>{t("experience.wp")}</small>
              </div>
            </article>

          </div>
        </div>
      </div>
        
       
      
    </section>
  )
}

export default Experience