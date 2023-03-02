import { useElementOnScreen } from '../../../hooks/useElementOnScreen';
import './AboutMe.css';
import vitaly from '../../../images/vitaly.webp'

function AboutMe() {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.15
  })
  return (
    <section ref={containerRef} className="about-me">
      <h2 className='title'>Студент</h2>
      <div className='about-me__grid-container'>
        <h3 className='about-me__name'>Виталий</h3>
        <p className='about-me__info'>Фронтенд-разработчик, 30 лет</p>
        <p className='about-me__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <a className='about-me__link'>Github</a>
        <img className='about-me__image' src={vitaly} ></img>
      </div>
      <div className='about-me__portfolio-container'>
        <div className='about-me__portfolio-item'>Статичный сайт</div>
        <div className='about-me__portfolio-item'>Адаптивный сайт</div>
        <div className='about-me__portfolio-item'>Одностраничное приложение</div>
      </div>
    </section>
  );
}

export default AboutMe;
