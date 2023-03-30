import '../../styles/NavBar.sass'
import PropTypes from 'prop-types'
import React from "react"

import { HiMenu, HiX } from 'react-icons/hi'
import { useState } from 'react'
import { Link } from "react-scroll"

const NavBar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const handleOnClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className='nabvar'>
      {isMobileMenuOpen ? (
        <nav className='mobile-menu'>
          <Link activeClass="active" to="HeroTop" smooth={true} offset={-70} duration={500} className="list">
            Inicio
          </Link>
          <Link activeClass="active" to="Services" smooth={true} offset={-70} duration={500} className="list">
            Servicios
          </Link>
          <Link activeClass="active" to="Clients" smooth={true} offset={-70} duration={500} className="list">
            Nuestros Clientes
          </Link>
          <Link activeClass="active" to="Us" smooth={true} offset={-70} duration={500} className="list">
            Nosotros
          </Link>
        </nav>
      ) : (
        ""
      )}

      {isMobileMenuOpen ? (
        <HiX className='mobile-menu-button' onClick={handleOnClick} />
      ) : (
        <HiMenu className='mobile-menu-button' onClick={handleOnClick} />
      )}

      <nav className='desktop-menu'>
        <Link activeClass="active" to="HeroTop" smooth={true} offset={-70} duration={500} className="list">
          Inicio
        </Link>
        <Link activeClass="active" to="Services" smooth={true} offset={-70} duration={500} className="list">
          Servicios
        </Link>
        <Link activeClass="active" to="Clients" smooth={true} offset={-70} duration={500} className="list">
          Nuestros Clientes
        </Link>
        <Link activeClass="active" to="Us" smooth={true} offset={-70} duration={500} className="list">
          Nosotros
        </Link>
      </nav>
    </div>
  )
}

NavBar.propTypes = {
  categories: PropTypes.array.isRequired,
}

export default NavBar
