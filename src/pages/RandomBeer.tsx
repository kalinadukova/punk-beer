import BeerList from '../components/BeerList/BeerList';
import { RandomBeerContext } from '../context/randomBeerContext';

import { useContext, useEffect } from 'react';

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
