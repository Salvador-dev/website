import React from 'react'
import './portfolio.css'
import { useTranslation } from "react-i18next"
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.png'
import IMG4 from '../../assets/project4.png'
import IMG5 from '../../assets/ATshop.png'
import IMG6 from '../../assets/resSamplePage.png'



const Portfolio = () => {
  const [t, i18n] = useTranslation("global");

  
  const data = [
  {
    id: 1,
    image: IMG1,
    title: t("portfolio.pro1"),
    github: 'https://github.com/Salvador-dev/Ecommerce-project',
    demo: 'https://salvador-dev.github.io/Ecommerce-project/'
  },
  {
    id: 2,
    image: IMG2,
    title: t("portfolio.pro2"),
    github: 'https://github.com/Salvador-dev/3D-Cube',
    demo: 'https://salvador-dev.github.io/3D-Cube/'
  },
  {
    id: 3,
    image: IMG3,
    title: t("portfolio.pro3"),
    github: 'https://github.com/Salvador-dev/GEMA',
    demo: 'https://salvador-dev.github.io/GEMA/'
  },
  {
    id: 4,
    image: IMG4,
    title: t("portfolio.pro4"),
    github: 'https://github.com/Salvador-dev/Portafolio-fotografico',
    demo: 'https://olartefotografia.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: t("portfolio.pro5"),
    github: '',
    demo: 'https://atbienestarbelleza.com/shop/'
  },
  {
    id: 6,
    image: IMG6,
    title: t("portfolio.pro6"),
    github: 'https://github.com/Salvador-dev/RestaurantSamplePage',
    demo: 'https://salvador-dev.github.io/RestaurantSamplePage/'
  }
]

  return (
    <section id='portfolio'>
      <h5>{t("portfolio.h5")}</h5>
      <h2>{t("portfolio.h2")}</h2>

      <div className='container portfolio__container'>

      {
          data.map(({id, image, title, github,demo}) => {
            return (
              <article className="portfolio__item" key={id}>
          <div className='portfolio__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn' target='_blank' >Github</a>
          <a href={demo} className='btn btn-primary' target='_blank' >{t("portfolio.demo")}</a>
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