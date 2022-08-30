import { useEffect, useState, ChangeEvent, useContext } from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';
import BeerList from '../../components/BeerList/BeerList';
import { FavouriteBeerContext } from '../../context/favouriteBeerContext';
import { WalletContext } from '../../context/walletContext';

import { Beer } from '../../components/BeerCard/BeerInterface';

const Favourites = () => {
  const [filteredBeers, setFilteredBeers] = useState<Beer[]>([]);
  const [input, setInput] = useState<string>('');

  const { favouriteBeers, setFavouriteBeers } =
    useContext(FavouriteBeerContext);
  const { isDetected } = useContext(WalletContext);

  function onSearchChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function findFavoriteBeers() {
    const tempBeersArray: Beer[] = [];

    for (let i = 0; i < favouriteBeers.length; i++) {
      if (
        favouriteBeers[i].name
          .toLocaleLowerCase()
          .includes(input.toLocaleLowerCase())
      ) {
        tempBeersArray.push(favouriteBeers[i]);
      }
    }

    setFilteredBeers([...tempBeersArray]);
  }

  useEffect(() => {
    if (localStorage.getItem('favouriteBeers') === null) {
      console.log(typeof localStorage.getItem('favouriteBeers'));

      localStorage.setItem('favouriteBeers', JSON.stringify([]));
    }

    const localFavouriteBeers: Beer[] = JSON.parse(
      localStorage.getItem('favouriteBeers') || ''
    );

    setFavouriteBeers(localFavouriteBeers);
    setFilteredBeers(localFavouriteBeers);
  }, []);

  return (
    <>
      <h1 style={{ textAlign: 'center', color: '#00d1b2' }}>Favourite beers</h1>
      <SearchBar
        onChangeHandler={onSearchChange}
        onClickHandler={findFavoriteBeers}
      />

      {favouriteBeers.length > 0 ? (
        <BeerList beersArray={filteredBeers} />
      ) : (
        <h2 style={{ textAlign: 'center', color: '#00d1b2' }}>
          No beers in favourites
        </h2>
      )}
    </>
  );
};

export default Favourites;
