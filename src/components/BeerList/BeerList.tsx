import { Beer } from '../../pages/Home';

import BeerCard from '../BeerCard/BeerCard';

import { FavouriteBeerContext } from '../../context/favouriteBeerContext';

import { useContext } from 'react';

import './BeerList.css';

interface BeerListProps {
  beersArray: Beer[];
}

const BeerList: React.FC<BeerListProps> = ({ beersArray }) => {
  const { addBeerToFavouriteList, removeBeerFromFavoriteList } =
    useContext(FavouriteBeerContext);

  return (
    <div className="beer-list_wrapper">
      <div className="beer-list__container">
        {beersArray.map((beer) => (
          <BeerCard
            key={beer.id}
            beer={beer}
            addBeerToFavouriteList={addBeerToFavouriteList}
            removeBeerFromFavoriteList={removeBeerFromFavoriteList}
          />
        ))}
      </div>
    </div>
  );
};

export default BeerList;
