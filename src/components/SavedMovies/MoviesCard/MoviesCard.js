import './MoviesCard.css';
import placeholder from '../../../images/placeholder.jpg';

function MoviesCard() {
  return (
    <>
      <div className='card'>
        <div className='movie__info'>
          <h2 className='movie__title'>В погоне за Бенкси</h2>
          <p className='movie__duration'>27 минут</p>
        </div>
        <img className='movie__preview' src={placeholder} />
        <div className='button__container'>
          <button className='movie__button movie__button_unchecked' onClick={(e) => { e.preventDefault() }} />
        </div>
      </div>
      <div className='card'>
        <div className='movie__info'>
          <h2 className='movie__title'>В погоне за Бенкси</h2>
          <p className='movie__duration'>27 минут</p>
        </div>
        <img className='movie__preview' src={placeholder} />
        <div className='button__container'>
          <button className='movie__button movie__button_checked' onClick={(e) => { e.preventDefault() }} />
        </div>
      </div>
    </>
  );
}

export default MoviesCard;
