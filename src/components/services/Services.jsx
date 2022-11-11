import React from 'react'
import './services.css'

import{BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design graphic user interface elements, like menus and tabs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Building page navigation buttons and search fields</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Designing the elements of web pages</p>
            </li>
           
            
          </ul>
        </article>
        {/*===========WEB DEVELOPMENT==========================*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Develoment</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Writing well designed, testable, efficient code by using best software development practices</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating website layout/user interfaces by using standard HTML/CSS practices</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integrating data from various back-end services and databases</p>
            </li>
            
            
          </ul>
        </article>
      {/*===========Content Creation==========================*/}
        <article className="service">
          <div className="service__head">
            <h3>Backend</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integration of user-facing elements developed by a front-end developers with server side logic</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Building reusable code and libraries for future use</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimization of the application for maximum speed and scalability</p>
            </li>
           
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services