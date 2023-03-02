import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
  return (
    <>
      <section className='cards-list'>
        <MoviesCard />
      </section>
      <section className='more'>
        <button className='more__button'>Ещё</button>
      </section>
    </>
  );
}

export default MoviesCardList;
