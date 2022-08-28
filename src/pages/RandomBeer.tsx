import BeerList from '../components/BeerList/BeerList';

import { Beer } from '../pages/Home';

import { useContext, useEffect } from 'react';

import { RandomBeerContext } from '../context/randomBeerContext';
import BeerCard from '../components/BeerCard/BeerCard';

const RandomBeer: React.FC = () => {
  const { randomBeer, randomBeerGenerator } = useContext(RandomBeerContext);

  // useEffect(() => {
  //   randomBeerGenerator();
  //   randomBeerTest = randomBeer[0];
  //   console.log(randomBeer[0]);
  // }, []);

  return <BeerList beersArray={randomBeer} />;
};

export default RandomBeer;
