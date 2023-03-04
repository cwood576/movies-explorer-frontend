import './AboutMe.css';
import vitaly from '../../../images/vitaly.webp'

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className='title'>Студент</h2>
      <div className='about-me__grid-container'>
        <h3 className='about-me__name'>Виталий</h3>
        <p className='about-me__info'>Фронтенд-разработчик, 30 лет</p>
        <p className='about-me__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <a className='about-me__link' rel="noreferrer" href='https://www.speedtest.net/' target="_blank">Github</a>
        <img alt='Здесь мог быть Виталий' className='about-me__image' src={vitaly} />
      </div>
      <ul className='about-me__portfolio-container'>
        <li className='about-me__portfolio-item'>
          <a className='about-me__portfolio-link' rel="noreferrer" href='https://www.speedtest.net/' target="_blank">
            Статичный сайт
          </a>
        </li>
        <li className='about-me__portfolio-item'>
          <a className='about-me__portfolio-link' rel="noreferrer" href='https://www.speedtest.net/' target="_blank">
            Адаптивный сайт
          </a>
        </li>
        <li className='about-me__portfolio-item'>
          <a className='about-me__portfolio-link' rel="noreferrer" href='https://www.speedtest.net/' target="_blank">
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;
