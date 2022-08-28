import { createContext, useState } from 'react';

export const RandomBeerContext = createContext();

export const RandomBeerProvider = ({ children }) => {
  const [randomBeer, setRandomBeer] = useState([]);

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
