import { createContext, useState } from 'react';

import { Beer } from '../components/BeerCard/BeerInterface';

import {
  FavouriteBeerContextProps,
  FavouriteBeerProviderProps,
} from './beerContextInterfaces';

const defaultBeer = {
  favouriteBeers: [],
  setFavouriteBeers: () => {},
  addBeerToFavouriteList: (item: Beer) => {},
  removeBeerFromFavoriteList: (item: Beer) => {},
};

export const FavouriteBeerContext =
  createContext<FavouriteBeerContextProps>(defaultBeer);

export const FavouriteBeerProvider: React.FC<FavouriteBeerProviderProps> = ({
  children,
}) => {
  const [favouriteBeers, setFavouriteBeers] = useState<Beer[]>([]);

  function addBeerToFavouriteList(item: Beer) {
    const localFavouriteBeers: Beer[] = JSON.parse(
      localStorage.getItem('favouriteBeers') || ''
    );

    const tempFavouriteList = [...localFavouriteBeers];
    tempFavouriteList.push(item);

    setFavouriteBeers([...tempFavouriteList]);

    localStorage.setItem('favouriteBeers', JSON.stringify(tempFavouriteList));
  }

  function removeBeerFromFavoriteList(item: Beer) {
    const tempFavouriteList = [...favouriteBeers];

    let index;

    for (let i = 0; i < tempFavouriteList.length; i++) {
      if (item.id === tempFavouriteList[i].id) {
        index = i;

        tempFavouriteList.splice(index, 1);
      }
    }

    setFavouriteBeers(tempFavouriteList);
    localStorage.setItem('favouriteBeers', JSON.stringify(tempFavouriteList));
  }

  return (
    <FavouriteBeerContext.Provider
      value={{
        favouriteBeers,
        setFavouriteBeers,
        addBeerToFavouriteList,
        removeBeerFromFavoriteList,
      }}
    >
      {children}
    </FavouriteBeerContext.Provider>
  );
};
