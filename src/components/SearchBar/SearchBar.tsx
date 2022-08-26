import { ChangeEvent } from 'react';

import './SearchBar.css';

interface SearchBarProps {
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickHandler: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onChangeHandler,
  onClickHandler,
}) => {
  return (
    <div className="search-bar__container">
      <input
        className="search-bar__input"
        type="search"
        placeholder="Search for beer..."
        onChange={onChangeHandler}
      />
      <button className="search-bar__btn" onClick={onClickHandler}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
