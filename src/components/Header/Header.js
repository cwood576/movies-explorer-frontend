import logo from '../../images/logo.svg';
import './Header.css';
import React, { useState } from "react"
import { NavLink } from 'react-router-dom';


function Header(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={`header ${props.page === 'main' ? 'header_page_main' : ''}`}>
      <NavLink to='/'>
        <img src={logo} href='/' className='header__logo' alt='logo' />
      </NavLink>
      {
        props.page === 'main' ? (
          <nav className='header__nav header__nav_page_main'>
            <NavLink to='/signup' className='nav__item nav__item_white'>Регистрация</NavLink>
            <NavLink to='/signin' className='nav__button'>Войти</NavLink>
          </nav >
        ) : (
          <>
            <div className='header__info'>
              <nav className='header__nav'>
                <NavLink to='/movies' className='nav__item'>Фильмы</NavLink>
                <NavLink to='/saved-movies' className='nav__item'>Сохранённые фильмы</NavLink>
              </nav >
              <NavLink style={{ textDecoration: 'none' }} to='/profile' className='header__profile'>
                <p className='profile__name'>Аккаунт</p>
                <div className='profile__image'></div>
              </NavLink>
            </div >
            <div className={`header__burger ${isMenuOpen ? 'header__burger_active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className={`burger__line  ${isMenuOpen ? 'burger__line_active' : ''}`}></span>
              <span className={`burger__line  ${isMenuOpen ? 'burger__line_active' : ''}`}></span>
              <span className={`burger__line  ${isMenuOpen ? 'burger__line_active' : ''}`}></span>
            </div>
            <div onClick={(e) => setIsMenuOpen(!isMenuOpen)} className={`header__menu ${isMenuOpen ? 'header__menu_active' : ''}`}>
              <div onClick={(e) => e.stopPropagation()} className={`header__wrap ${isMenuOpen ? 'header__wrap_active' : ''}`}>
                <nav className='header__menu-container'>
                  <NavLink to='/' style={{ textDecoration: 'none' }} className={`nav__menu-item ${props.page === 'main' ? 'nav__menu-item_active' : ''}`}>Главная</NavLink>
                  <NavLink to='/movies' style={{ textDecoration: 'none' }} className={`nav__menu-item ${props.page === 'movies' ? 'nav__menu-item_active' : ''}`}>Фильмы</NavLink>
                  <NavLink to='/saved-movies' style={{ textDecoration: 'none' }} className={`nav__menu-item ${props.page === 'savedMovies' ? 'nav__menu-item_active' : ''}`}>Сохранённые фильмы</NavLink>
                </nav >
                <NavLink style={{ textDecoration: 'none' }} to='/profile' className='header__profile'>
                  <p className='profile__name'>Аккаунт</p>
                  <div className='profile__image'></div>
                </NavLink>
              </div>
            </div>
          </>
        )
      }
    </header >
  );
}

export default Header;
