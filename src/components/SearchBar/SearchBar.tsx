import { ChangeEvent, useContext } from 'react';

import { WalletContext } from '../../context/walletContext';

import './SearchBar.css';

interface SearchBarProps {
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickHandler: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onChangeHandler,
  onClickHandler,
}) => {
  const { walletAddress } = useContext(WalletContext);

  return (
    <div className="search-bar__container">
      <input
        disabled={walletAddress ? false : true}
        className="search-bar__input"
        type="search"
        placeholder="Search for beer..."
        onChange={onChangeHandler}
      />
      <button
        className="search-bar__btn"
        disabled={walletAddress ? false : true}
        style={!walletAddress ? { cursor: 'not-allowed' } : {}}
        onClick={onClickHandler}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
