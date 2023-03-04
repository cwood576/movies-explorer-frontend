import './MoviesCard.css';
import placeholder from '../../../images/placeholder.jpg';
import { useState } from 'react';

function MoviesCard(props) {
  const [isSaved, setIsSaved] = useState(false)
  return (
    <>
      <li className='card'>
        <div className='movie__info'>
          <h2 className={`movie__title ${props.page === 'savedMovies' ? "movie__title_bold" : ''}`}>В погоне за Бенкси</h2>
          <p className={`movie__duration ${props.page === 'savedMovies' ? "movie__duration_bold" : ''}`}>27 минут</p>
        </div>
        <img alt='В погоне за Бенкси' className='movie__preview' src={placeholder} />
        <div className='button__container'>
          <button
            className=
            {`movie__button ${props.page === 'savedMovies' ? 'movie__button_page_saved' : isSaved ? "movie__button_checked" : "movie__button_unchecked"} `}
            onClick={
              (e) => {
                e.preventDefault()
                setIsSaved(!isSaved)
              }} />
        </div>
      </li>
    </>
  );
}

export default MoviesCard;
