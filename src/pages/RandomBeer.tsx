import BeerList from '../components/BeerList/BeerList';

import { Beer } from '../pages/Home';

import { useContext, useEffect } from 'react';

import { RandomBeerContext } from '../context/randomBeerContext';

const RandomBeer: React.FC = () => {
  const { randomBeer, randomBeerGenerator } = useContext(RandomBeerContext);

  useEffect(() => {
    randomBeerGenerator();
  }, []);

  return (
    <>
      <BeerList beersArray={randomBeer} />
    </>
  );
};

export default RandomBeer;
