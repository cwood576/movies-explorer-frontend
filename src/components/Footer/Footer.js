import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__info'>
        <p className='footer__year'>© 2023</p>
        <div className='footer__links'>
          <p className='footer__link'>Яндекс.Практикум</p>
          <p className='footer__link'>Github</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
