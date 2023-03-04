import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <>
      <ul className='cards-list'>
        <MoviesCard page={props.page} />
        <MoviesCard page={props.page} />
        <MoviesCard page={props.page} />
        <MoviesCard page={props.page} />
        <MoviesCard page={props.page} />
      </ul>
      <section className='more'>
        <button className='more__button'>Ещё</button>
      </section>
    </>
  );
}

export default MoviesCardList;
