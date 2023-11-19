import { FormEvent, useState } from "react";
import "./SearchBar.scss";

interface ISearchBarProps {
    handleSearchBarSubmit: (event: FormEvent<HTMLFormElement>, searchValue: string) => Promise<void>
};

export const SearchBar = ({ handleSearchBarSubmit }: ISearchBarProps) => {
    const [searchValue, setSearchValue] = useState('');

    const handleClearButtonClick = () => {
        setSearchValue('');
    };

    return (
        <form className="search-bar__form" onSubmit={(event) => handleSearchBarSubmit(event, searchValue)}>
            {/* Input type="search" has clear input cross-button by default */}
            <input className="search-bar__input"
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)} />
            <button className="search-bar__clear-button"
                type="reset"
                title="Clear input"
                onClick={handleClearButtonClick}>×</button>
        </form>
    );
};