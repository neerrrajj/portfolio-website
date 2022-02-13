import { Fragment, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import logo from '../../assets/logo.png'
import DesignStudioWebsiteImage from '../../assets/DesignStudioWebsiteImage.png'
import './Navbar.css'

const body = document.body
let lastScroll = 0

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset
  if (currentScroll <= 0) {
    body.classList.remove('scroll-up')
  }
  if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
    body.classList.remove('scroll-up')
    body.classList.add('scroll-down')
  }
  if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
    body.classList.remove('scroll-down')
    body.classList.add('scroll-up')
  }
  lastScroll = currentScroll
})

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const openNavbarMenu = () => {
    setToggleMenu(true)
    if (typeof window != 'undefined' && window.document) {
      body.style.overflow = 'hidden'
    }
  }

  const closeNavbarMenu = () => {
    setToggleMenu(false)
    body.style.overflow = 'unset'
  }

  const NavLinks = () => (
    <>
      <p>
        <a href="#home" onClick={closeNavbarMenu}>
          Home
        </a>
      </p>
      <p>
        <a href="#about" onClick={closeNavbarMenu}>
          About
        </a>
      </p>
      <p>
        <a href="#projects" onClick={closeNavbarMenu}>
          Projects
        </a>
      </p>
      <p>
        <a href="#contact" onClick={closeNavbarMenu}>
          Contact
        </a>
      </p>
    </>
  )

  const Resume = () => (
    <a href={DesignStudioWebsiteImage} download="resume">
      <button
        type="button"
        className="border__button"
        onClick={closeNavbarMenu}
      >
        Resume
      </button>
    </a>
  )

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="app__navbar-links">
        <NavLinks />
        <Resume />
      </div>
      <div className="app__navbar-menu">
        <AiOutlineMenu
          color="#099fff"
          size={28}
          className="navbar-menu"
          onClick={openNavbarMenu}
        />
        {toggleMenu && (
          <Fragment>
            <div className="app__backdrop" onClick={closeNavbarMenu} />
            <div className="app__navbar-container slide-left ">
              <AiOutlineClose
                color="#099fff"
                size={28}
                className="container-close"
                onClick={closeNavbarMenu}
              />
              <div className="container-links">
                <NavLinks />
                <Resume />
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </nav>
  )
}

export default Navbar
