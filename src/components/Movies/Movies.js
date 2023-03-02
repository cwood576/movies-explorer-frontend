import Search from './Search/Search';
import Preloader from './Preloader/Preloader';

import MoviesCardList from './MoviesCardList/MoviesCardList';
import { useState, useEffect } from 'react';



function Movies(props) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000)
  }, [])

  return (
    <>
      <Search />
      {isLoading ? (
        <Preloader />
      ) : (<MoviesCardList page={props.page} />)}

    </>
  );
}

export default Movies;
