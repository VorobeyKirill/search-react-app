import { FormEvent, useState } from "react";

interface ISearchBarProps {
    handleSearchBarSubmit: (event: FormEvent<HTMLFormElement>, searchValue: string) => Promise<void>
};

export const SearchBar = ({ handleSearchBarSubmit }: ISearchBarProps) => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <form className="search-bar__form" onSubmit={(event) => handleSearchBarSubmit(event, searchValue)}>
            {/* Input type="search" has clear input cross-button by default */}
            <input className="search-bar__input"
                type="search"
                placeholder="Search..."
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)} />
        </form>
    );
};