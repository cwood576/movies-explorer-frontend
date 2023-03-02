import { useElementOnScreen } from '../../../hooks/useElementOnScreen';
import './AboutProject.css';


function AboutProject() {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.15
  })
  return (
    <section ref={containerRef} className="about-project">
      <h2 className='title'> О проекте</h2>
      <div className='about-project__grid-container'>
        <div className='about-project__info'>
          <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about-project__info'>
          <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>

      </div>
      <div className={`about-project__progress-bar ${isVisible ? 'about-project__progress-bar_visible' : ''}`}>
        <span className='about-project__progress about-project__backend' />
        <span className='about-project__progress about-project__frontend' />
      </div>
    </section>
  );
}

export default AboutProject;
