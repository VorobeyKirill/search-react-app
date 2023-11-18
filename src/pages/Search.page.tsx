import { FormEvent, useState } from "react";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { SEARCH_API_URL } from "../constants";
import { SearchResults } from "../components/SearchResults/SearchResults";

export const Search = () => {
    const [mediaResults, setMediaResults] = useState(null);

    const handleSearchBarSubmit = async (event: FormEvent<HTMLFormElement>, searchValue: string): Promise<void> => {
        // preventing page reloading after form submit event
        event.preventDefault();

        await requestSearchResults(searchValue)
    };

    const requestSearchResults = async (searchValue: string) => {
        // requesting media results by search query
        const response = await fetch (`${SEARCH_API_URL}/search?query="${searchValue}"`);

        const mediaDataJSON = await response.json();

        setMediaResults(mediaDataJSON.media);
    };

    return (
        <>
            <SearchBar handleSearchBarSubmit={handleSearchBarSubmit} />
            {mediaResults && <SearchResults />}
        </>
    );
};