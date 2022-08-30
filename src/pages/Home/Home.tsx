import { ChangeEvent, useState, useEffect, useContext } from 'react';

import { Beer } from '../../components/BeerCard/BeerInterface';

import SearchBar from '../../components/SearchBar/SearchBar';
import BeerList from '../../components/BeerList/BeerList';

import { WalletContext } from '../../context/walletContext';

const Home = () => {
  const [input, setInput] = useState<string>('');
  const [beers, setBeers] = useState<Beer[]>([]);

  const { isDetected, connectWallet } = useContext(WalletContext);

  useEffect(() => {
    getBeers();
    connectWallet();
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
      {isDetected ? (
        ''
      ) : (
        <h2 style={{ textAlign: 'center', color: '#00d1b2' }}>
          MetaMask is not detected
        </h2>
      )}
      <SearchBar onChangeHandler={onSearchChange} onClickHandler={findBeers} />
      <BeerList beersArray={beers} />
    </>
  );
};

export default Home;
