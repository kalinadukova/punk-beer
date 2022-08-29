import { createContext, useState } from 'react';

import { Beer } from '../pages/Home';

interface RandomBeerProviderProps {
  children: React.ReactNode;
}

interface RandomBeerContextProps {
  randomBeer: Beer[];
  randomBeerGenerator: () => void;
}

const defaultRandomBeer = {
  randomBeer: [],
  randomBeerGenerator: () => {},
};

export const RandomBeerContext =
  createContext<RandomBeerContextProps>(defaultRandomBeer);

export const RandomBeerProvider: React.FC<RandomBeerProviderProps> = ({
  children,
}) => {
  const [randomBeer, setRandomBeer] = useState<Beer[]>([]);

  function randomBeerGenerator() {
    setRandomBeer([]);
    fetch('https://api.punkapi.com/v2/beers/random')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // localStorage.setItem('randomBeer', JSON.stringify(data));
        setRandomBeer(data);
      });
  }

  return (
    <RandomBeerContext.Provider value={{ randomBeer, randomBeerGenerator }}>
      {children}
    </RandomBeerContext.Provider>
  );
};
