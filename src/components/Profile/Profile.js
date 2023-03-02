import './Profile.css';


function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__greeting">Привет, Виталий!</h1>
      <div className="profile__info">
        <div className='profile__field'>
          <div className='profile__info-item'>
            Имя
          </div>
          <div className='profile__info-item'>
            Виталий
          </div>
        </div>
        <div className='profile__field'>
          <div className='profile__info-item'>
            E-mail
          </div>
          <div className='profile__info-item'>
            pochta@yandex.ru
          </div>
        </div>
      </div>
      <div className="profile__control">
        <p className='profile__edit'>Редактировать</p>
        <p className='profile__exit'>Выйти из аккаунта</p>
      </div>
    </section>
  );
}

export default Profile;
