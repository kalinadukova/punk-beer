import './Header.css';

import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { RandomBeerContext } from '../../context/randomBeerContext';

const Header: React.FC = () => {
  const { randomBeerGenerator } = useContext(RandomBeerContext);

  return (
    <nav className="navigation">
      <h1 className="navigation__header">Beans love Beers</h1>
      <ul className="navigation__list">
        <li className="navigation__element">
          <Link to="/">Home</Link>
        </li>
        <li className="navigation__element">
          <Link to="/favourites">Favourites</Link>
        </li>
        <li className="navigation__element">
          <Link to="/random-beer">Random beer</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
