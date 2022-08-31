import { ReactNode } from 'react';

import { Beer } from '../components/BeerCard/BeerInterface';

export interface FavouriteBeerProviderProps {
  children: ReactNode;
}

export interface FavouriteBeerContextProps {
  favouriteBeers: Beer[];
  setFavouriteBeers: (favouriteBeers: Beer[]) => void;
  addBeerToFavouriteList: (item: Beer) => void;
  removeBeerFromFavoriteList: (item: Beer) => void;
}
