import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6 months</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>Local Clients</small>
            </article>
            
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>04+ Completed</small>
            </article>
          </div>
          <p>
              I am a self-motivated team player and seeking a position as a web developer with Next Generation Web Development where I can apply my knowledge of web design with my abilities to meet client needs and exceed their expectations.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About