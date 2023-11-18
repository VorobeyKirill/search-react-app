import { IMAGO_IMAGES_URL } from "../../constants";
import { IMedia } from "../../types";

interface ISearchResultsProp {
    mediaResults: IMedia[]
}

export const SearchResults = ({ mediaResults }: ISearchResultsProp) => {
    return (
        <div className="search-results-container">
            {mediaResults.map(media => (
                <img src={`${IMAGO_IMAGES_URL}${media.preview}`}
                    className="searc-results__media"
                    key={media["media-id"]}
                    alt="media returned by search"
                />
            ))}
        </div>
    )
};