import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/me.png'
import { useTranslation } from "react-i18next"

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';





const Testimonials = () => {

  const [t, i18n] = useTranslation("global");

  const data = [
    {
      avatar: AVTR1,
      name: 'Tina Snow',
      review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quidem amet accusantium. Corrupti quas magni optio hic repellat quae autem explicabo similique, numquam nisi magnam neque maxime vitae? Consequatur, repellendus!'
    },{
      avatar: AVTR1,
      name: 'Tina Snow',
      review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quidem amet accusantium. Corrupti quas magni optio hic repellat quae autem explicabo similique, numquam nisi magnam neque maxime vitae? Consequatur, repellendus!'
    },{
      avatar: AVTR1,
      name: 'Tina Snow',
      review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quidem amet accusantium. Corrupti quas magni optio hic repellat quae autem explicabo similique, numquam nisi magnam neque maxime vitae? Consequatur, repellendus!'
    },{
      avatar: AVTR1,
      name: 'Tina Snow',
      review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quidem amet accusantium. Corrupti quas magni optio hic repellat quae autem explicabo similique, numquam nisi magnam neque maxime vitae? Consequatur, repellendus!'
    },
    
  ]

  return (
    <section id='testimonials'>
      <h5>{t("testimonials.h5")}</h5>
      <h2>{t("testimonials.h2")}</h2>

      <Swiper className='container testimonials__container'
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={50}
       slidesPerView={1}
       pagination={{ clickable: true }}>
       
       {
         data.map(({avatar, name, review}, index) => {
           return (
            <SwiperSlide className='testimonial'>
            <div className='client__avatar'>
              <img src={avatar} />
            </div>
  
            <h5 className='client__name'>{name}</h5>
              <small>{review}</small>
  
          </SwiperSlide>
           )
         })
       }

    
      </Swiper>
    </section>
  )
}

export default Testimonials

