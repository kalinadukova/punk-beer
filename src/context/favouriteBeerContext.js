import { createContext, useState } from 'react';

export const FavouriteBeerContext = createContext();

export const FavouriteBeerProvider = ({ children }) => {
  const [favouriteBeers, setFavouriteBeers] = useState([]);

  function addBeerToFavouriteList(item) {
    const tempFavouriteList = [...favouriteBeers];
    tempFavouriteList.push(item);

    setFavouriteBeers([...tempFavouriteList]);
  }

  function removeBeerFromFavoriteList(item) {
    const tempFavouriteList = [...favouriteBeers];

    let index;

    for (let i = 0; i < tempFavouriteList.length; i++) {
      if (item.id === tempFavouriteList[i].id) {
        index = i;

        tempFavouriteList.splice(index, 1);
      }
    }

    setFavouriteBeers(tempFavouriteList);
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
