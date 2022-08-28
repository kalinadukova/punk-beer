import Header from './components/Header/Header';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import RandomBeer from './pages/RandomBeer';
import NotFound from './pages/NotFound';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
