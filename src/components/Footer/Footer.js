import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__info'>
        <p className='footer__year'>© 2023</p>
        <div className='footer__links'>
          <a rel="noreferrer" href='https://www.speedtest.net/' target="_blank" className='footer__link'>Яндекс.Практикум</a>
          <a rel="noreferrer" href='https://www.speedtest.net/' target="_blank" className='footer__link'>Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
