import { useEffect, useState } from 'react';

import BeerList from '../../components/BeerList/BeerList';
import { Beer } from '../../components/BeerCard/BeerInterface';

import './RandomBeer.css';

const RandomBeer: React.FC = () => {
  const [randomBeer, setRandomBeer] = useState<Beer[]>([]);

  const randomBeerGenerator = () => {
    setRandomBeer([]);
    fetch('https://api.punkapi.com/v2/beers/random')
      .then((res) => res.json())
      .then((data) => {
        setRandomBeer([]);
        setRandomBeer(data);
      });
  };

  useEffect(() => {
    randomBeerGenerator();
  }, []);

  return (
    <>
      <div className="random-beer-btn__container">
        <button className="random-beer-btn" onClick={randomBeerGenerator}>
          Get random beer
        </button>
      </div>
      <BeerList beersArray={randomBeer} />
    </>
  );
};

export default RandomBeer;
