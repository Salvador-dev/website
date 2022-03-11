import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.png'
import IMG4 from '../../assets/project4.png'
import IMG5 from '../../assets/the goat.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Simple Ecommerce model site',
    github: 'https://github.com/Salvador-dev/Ecommerce-project',
    demo: 'https://salvador-dev.github.io/Ecommerce-project/'
  },
  {
    id: 2,
    image: IMG2,
    title: '3D Cube',
    github: 'https://github.com/Salvador-dev/3D-Cube',
    demo: 'https://salvador-dev.github.io/3D-Cube/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Art brand website',
    github: 'https://github.com/Salvador-dev/GEMA',
    demo: 'https://salvador-dev.github.io/GEMA/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Photographic portfolio website',
    github: 'https://github.com/Salvador-dev/Portafolio-fotografico',
    demo: 'https://olartefotografia.com/'
  },
  {
    id: 4,
    image: IMG5,
    title: 'NFT ilustration',
    github: '',
    demo: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/72476262877558752069566104358271143617717309359152549689642861672162750627841/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>

      {
          data.map(({id, image, title, github,demo}) => {
            return (
              <article className='portfolio__item' key={id}>
          <div className='portfolio__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn' target='_blank' >Github</a>
          <a href={demo} className='btn btn-primary' target='_blank' >Live Demo</a>
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