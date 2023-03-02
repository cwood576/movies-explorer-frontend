import './Auth.css';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';


function Auth(props) {
  return (
    <section className="auth">
      <div className="auth__top" >
        <img
          src={logo}
          className="auth__logo"
          alt='Лого'
        ></img>
        <h1 className="auth__title">
          {props.page === 'signup' ? 'Добро пожаловать!' : 'Рады видеть!'}
        </h1>
      </div>
      <form className='auth__form'>
        {props.page === 'signup' ? (
          <label className='auth__label' for="name">Имя <input className='auth__input' name='name'></input></label>)
          : ''}
        <label className='auth__label' for="e-mail">E-mail <input className='auth__input' name='e-mail'></input></label>
        <label className='auth__label' for="password">Пароль <input className='auth__input' name='password'></input></label>
        <div className='auth__button-container'>
          <button className='auth__button'>
            {props.page === 'signup' ? 'Зарегистрироваться' : 'Войти'}
          </button>
          <p className='auth__question'>
            {props.page === 'signup' ? 'Уже зарегистрированы?' : 'Ещё не зарегистрированы?'}
            <NavLink to={props.page === 'signup' ? '/signin' : '/signup'} className='auth__link'>{props.page === 'signup' ? 'Войти' : 'Регистрация'} </NavLink>
          </p>
        </div>
      </form>
    </section >
  );
}

export default Auth;
