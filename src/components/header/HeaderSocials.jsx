import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/nazmul-hasan-92b420175" target="_blank"> <BsLinkedin /> </a>
        <a href="https://github.com/nazmulcse041" target="_blank"> <FaGithub /> </a>
        <a href="" target="_blank"> <FiDribbble/> </a>
    </div>
  )
}

export default HeaderSocials