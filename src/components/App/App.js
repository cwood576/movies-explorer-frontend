import './App.css';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from '../Auth/Auth';
import NotFound from '../NotFound/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/movies' element={
          <>
            <Header page='movies' />
            <Movies page='movies' />
            <Footer />
          </>
        } />
        <Route path='/saved-movies' element={
          <>
            <Header page='savedMovies' />
            <Movies page='savedMovies' />
            <Footer />
          </>
        } />
        <Route path='/profile' element={
          <>
            <Header />
            <Profile />
          </>
        } />
        <Route path='/signup' element={
          <>
            <Auth page='signup' />
          </>
        } />
        <Route path='/signin' element={
          <>
            <Auth />
          </>
        } />
        <Route path='*' element={
          <>
            <NotFound />
          </>
        } />

        <Route path='/' element={
          <>
            <Header page='main' />
            <Main />
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
