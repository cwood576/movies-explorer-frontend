import AboutMe from './AboutMe/AboutMe';
import AboutProject from './AboutProject/AboutProject';
import Promo from './Promo/Promo';
import Tech from './Techs/Tech';


function Main() {
  return (
    <>
      <main >
        <Promo />
        <AboutProject />
        <Tech />
        <AboutMe />
      </main>
    </>
  );
}

export default Main;
