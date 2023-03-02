import './Search.css';

function Search() {
  return (
    <form className='search'>
      <div className='input-container'>
        <div className='search__icon'></div>
        <input placeholder='Фильм' className='search__input'></input>
        <button className='search__button' onClick={(evt) => {
          evt.preventDefault()
        }}></button>
      </div>
      <div className='toogle-container'>
        <label className="toogle">
          <input className="toogle__input" type="checkbox" />
          <span className="toogle__button" />
        </label>
        <p className='search__text'>Короткометражки</p>
      </div>
    </form>
  );
}

export default Search;
