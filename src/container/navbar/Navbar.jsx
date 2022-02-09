import { Fragment, useState } from 'react'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import logo from '../../assets/logo.png'
import './Navbar.css'

const NavLinks = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#portfolio">Portfolio</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
  </>
)

const Resume = () => (
  <button type="button" className="border__button">
    Resume
  </button>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const openNavbarMenu = () => {
    setToggleMenu(true)
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden'
    }
  }

  const closeNavbarMenu = () => {
    setToggleMenu(false)
    document.body.style.overflow = 'unset'
  }

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
