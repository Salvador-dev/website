import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { useTranslation } from "react-i18next"

const Contact = () => {

  const [t, i18n] = useTranslation("global");

  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_py1h3eo', 'template_jsimv4i', form.current, 'rY1L4lBTPC6GlGpIC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>{t("contact.h5")}</h5>
      <h2>{t("contact.h2")}</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5></h5>
            <a href="mailto: rodavlasxp@gmail.com" target="_blank">{t("contact.send")}</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5></h5>
            <a href="https://m.me/Salvadorrrrrrr" target="_blank">{t("contact.send")}</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5></h5>
            <a href="https://api.whatsapp.com/send?phone=+584241416875" target="_blank">{t("contact.send")}</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit>
          <input type="text" name='name' placeholder={t("contact.name")} required />
          <input type="email" name='email' placeholder={t("contact.mail")} required />
          <textarea name="message"  rows="7" placeholder={t("contact.mess")} required></textarea>
          <button type='submit' className='btn btn-primary'>{t("contact.send")}</button>

        </form>
      </div>
    
    </section>
  )
}

export default Contact