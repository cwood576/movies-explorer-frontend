import './NotFound.css';
import { NavLink } from 'react-router-dom';


function NotFound(props) {

  return (
    <section className='not-found'>
      <h1 className='not-found__title' >404</h1>
      <p className='not-found__subtitle' >Страница не найдена</p>
      <NavLink className='not-found__go-back' to={-1}> Назад</NavLink>
    </section>
  );
}

export default NotFound;
