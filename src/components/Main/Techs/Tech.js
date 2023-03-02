import { useElementOnScreen } from '../../../hooks/useElementOnScreen';
import './Tech.css';


function Tech() {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.15
  })
  return (
    <section ref={containerRef} className="tech">
      <h2 className='title'>Технологии</h2>
      <h3 className='tech__subtitle'>7 технологий</h3>
      <p className='tech__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className='tech__list'>
        <li className='tech__item'>HTML</li>
        <li className='tech__item'>CSS</li>
        <li className='tech__item'>JS</li>
        <li className='tech__item'>React</li>
        <li className='tech__item'>Git</li>
        <li className='tech__item'>Express.js</li>
        <li className='tech__item'>mongoDB</li>
      </ul>
      {/* <div className={`about-project__progress-bar ${isVisible ? 'about-project__progress-bar_visible' : ''}`}>
        <span className='about-project__progress about-project__backend' />
        <span className='about-project__progress about-project__frontend' />
      </div> */}
    </section >
  );
}

export default Tech;
