import React, { createContext, useState, ReactNode } from 'react';

import { Beer } from '../pages/Home';

interface FavouriteBeerProviderProps {
  children: React.ReactNode;
}

interface FavouriteBeerContextProps {
  favouriteBeers: Beer[];
  setFavouriteBeers: (favouriteBeers: Beer[]) => void;
  addBeerToFavouriteList: (item: Beer) => void;
  removeBeerFromFavoriteList: (item: Beer) => void;
}

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
    const localFavouriteBeers = JSON.parse(
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
