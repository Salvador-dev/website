import React from 'react'
import './portfolio.css'
import { useTranslation } from "react-i18next"
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.png'
import IMG4 from '../../assets/project4.png'
import IMG5 from '../../assets/project5.png'
import IMG6 from '../../assets/project6.png'
import IMG7 from '../../assets/project7.png'
import IMG8 from '../../assets/project8.png'
import IMG9 from '../../assets/project9.png'
import IMG10 from '../../assets/project10.png'
import IMG11 from '../../assets/project11.png'
import IMG12 from '../../assets/project12.png'
import IMG13 from '../../assets/project13.png'






const Portfolio = () => {
  const [t, i18n] = useTranslation("global");

  
  const data = [
  {
    id: 11,
    image: IMG11,
    title: t("portfolio.pro11"),
    github: '',
    demo: '',
    apk: '',
    exe: '../../assets/proyectoCuentas.exe'
  },
  {
    id: 12,
    image: IMG12,
    title: t("portfolio.pro12"),
    github: '',
    demo: '',
    apk: '',
    exe: '../../assets/proyectoSudoku.exe'
  },
  {
    id: 13,
    image: IMG13,
    title: t("portfolio.pro13"),
    github: '',
    demo: '',
    apk: '',
    exe: '../../assets/proyectoTragamonedas.exe'
  },
  {
    id: 1,
    image: IMG1,
    title: t("portfolio.pro1"),
    github: 'https://github.com/Salvador-dev/Ecommerce-project',
    demo: 'https://salvador-dev.github.io/Ecommerce-project/',
    apk: '',
    exe: ''
  },
  {
    id: 2,
    image: IMG2,
    title: t("portfolio.pro2"),
    github: 'https://github.com/Salvador-dev/3D-Cube',
    demo: 'https://salvador-dev.github.io/3D-Cube/',
    apk: '',
    exe: ''
  },
  {
    id: 3,
    image: IMG3,
    title: t("portfolio.pro3"),
    github: 'https://github.com/Salvador-dev/GEMA',
    demo: 'https://salvador-dev.github.io/GEMA/',
    apk: '',
    exe: ''
  },
  {
    id: 4,
    image: IMG4,
    title: t("portfolio.pro4"),
    github: 'https://github.com/Salvador-dev/Portafolio-fotografico',
    demo: 'https://olartefotografia.com/',
    apk: '',
    exe: ''
  },
  {
    id: 5,
    image: IMG5,
    title: t("portfolio.pro5"),
    github: '',
    demo: 'https://atbienestarbelleza.com/shop/',
    apk: '',
    exe: ''
  },
  {
    id: 6,
    image: IMG6,
    title: t("portfolio.pro6"),
    github: 'https://github.com/Salvador-dev/RestaurantSamplePage',
    demo: 'https://salvador-dev.github.io/RestaurantSamplePage/',
    apk: '',
    exe: ''
  },
  {
    id: 7,
    image: IMG7,
    title: t("portfolio.pro7"),
    github: 'https://github.com/Salvador-dev/3dcard',
    demo: 'https://salvador-dev.github.io/3dcard/',
    apk: '',
    exe: ''
  },
  {
    id: 8,
    image: IMG8,
    title: t("portfolio.pro8"),
    github: 'https://github.com/Salvador-dev/Task-list-App',
    apk: 'https://api.whatsapp.com/send?phone=584241416875',
    demo: '',
    exe: ''
  },
  {
    id: 9,
    image: IMG9,
    title: t("portfolio.pro9"),
    github: 'https://github.com/Salvador-dev/painterAI-ionic',
    apk: 'https://api.whatsapp.com/send?phone=584241416875',
    demo: '',
    exe: ''

  },
  {
    id: 10,
    image: IMG10,
    title: t("portfolio.pro10"),
    github: '',
    apk: '',
    demo: 'https://asclemedical.com/',
    exe: ''

  }
]

  return (
    <section id='portfolio'>
      <h5>{t("portfolio.h5")}</h5>
      <h2>{t("portfolio.h2")}</h2>

      <div className='container portfolio__container'>

      {
          data.map(({id, image, title, github, demo, apk, exe}) => {
            return (
              <article className="portfolio__item" key={id}>
          <div className='portfolio__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
            {github.length > 0 ? <a href={github} className='btn' target='_blank' >Github</a> : '' }
            {demo.length > 0 ? <a href={demo} className='btn btn-primary' target='_blank' >{t("portfolio.demo")}</a> : '' }
            {apk.length > 0 ? <a href={apk} className='btn btn-primary'>{t("portfolio.apk")}</a> : '' }
            {exe.length > 0 ? <a href={exe} download className='btn btn-primary'>{t("portfolio.exe")}</a> : '' }


          </div>
        </article>
            )
          })
        }

        


      </div>
      
    </section>
      )
}

export default Portfolio