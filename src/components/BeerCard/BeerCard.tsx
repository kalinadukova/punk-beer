import { Beer } from './BeerInterface';

import { useContext, useEffect } from 'react';
import { WalletContext } from '../../context/walletContext';

import audio from '../../assests/beer_sound.wav';
import './BeerCard.css';

interface BeerCardProps {
  beer: Beer;
  addBeerToFavouriteList: (item: Beer) => void;
  removeBeerFromFavoriteList: (item: Beer) => void;
}

const BeerCard: React.FC<BeerCardProps> = ({
  beer,
  addBeerToFavouriteList,
  removeBeerFromFavoriteList,
}) => {
  const beerSound = new Audio(audio);

  const { walletAddress, checkLocalStorage } = useContext(WalletContext);

  useEffect(() => {
    checkLocalStorage();
  }, []);

  function addItem() {
    const item = {
      id: beer.id,
      name: beer.name,
      image_url: beer.image_url,
      description: beer.description,
    };

    localStorage.setItem(beer.name, JSON.stringify(item));

    addBeerToFavouriteList(item);
  }

  function removeItem() {
    const item = {
      id: beer.id,
      name: beer.name,
      image_url: beer.image_url,
      description: beer.description,
    };
    localStorage.removeItem(beer.name);

    removeBeerFromFavoriteList(item);
  }

  return (
    <div className="beer-card__container">
      {walletAddress &&
        (localStorage.getItem(beer.name) ? (
          <i className="fa-solid fa-heart icon" onClick={removeItem}></i>
        ) : (
          <i className="fa-regular fa-heart icon" onClick={addItem}></i>
        ))}

      <img
        className="beer-card__img"
        src={beer.image_url}
        alt="Beer image"
        onClick={() => beerSound.play()}
      />

      <div className="beer-card__content">
        <h3 className="beer-card__content-header">{beer.name}</h3>
        <p className="beer-card__content-description">{beer.description}</p>
      </div>
    </div>
  );
};

export default BeerCard;
