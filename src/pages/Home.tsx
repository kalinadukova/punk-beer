import { ChangeEvent, useState, useEffect } from 'react';

import SearchBar from '../components/SearchBar/SearchBar';
import BeerList from '../components/BeerList/BeerList';

export interface Beer {
  id: number;
  name: string;
  description: string;
  image_url: string;
}

const Home = () => {
  const [input, setInput] = useState<string>('');
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    getBeers();
  }, []);

  async function getBeers() {
    const res = await fetch('https://api.punkapi.com/v2/beers');
    const beerData = await res.json();

    setBeers(beerData);
  }

  function onSearchChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  const findBeers = async () => {
    if (!input) {
      getBeers();
      return;
    }
    const res = await fetch(
      `https://api.punkapi.com/v2/beers?beer_name=${input}`
    );
    const beers = await res.json();
    setBeers(beers);
  };

  return (
    <>
      <SearchBar onChangeHandler={onSearchChange} onClickHandler={findBeers} />
      <BeerList beersArray={beers} />
    </>
  );
};

export default Home;
