import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <>
      <section className='cards-list'>
        <MoviesCard page={props.page} />
        <MoviesCard page={props.page} />
        <MoviesCard page={props.page} />
        <MoviesCard page={props.page} />
        <MoviesCard page={props.page} />
      </section>
      <section className='more'>
        <button className='more__button'>Ещё</button>
      </section>
    </>
  );
}

export default MoviesCardList;
