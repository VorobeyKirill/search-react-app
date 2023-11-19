import { IMAGO_IMAGES_URL } from "../../constants";
import { IMediaPreview } from "../../types";
import { useNavigate } from "react-router-dom";

import "./SearchResults.scss";

interface ISearchResultsProp {
    mediaResults: IMediaPreview[]
}

export const SearchResults = ({ mediaResults }: ISearchResultsProp) => {
    const navigate = useNavigate();

    return (
        <ul className="search-results-list">
            {mediaResults.map(media => (
                <li className="searc-results-list__item" key={media["media-id"]}>
                    <img src={`${IMAGO_IMAGES_URL}${media.preview}`}
                        className="searc-results-item__image"
                        alt="media returned by search"
                        onClick={() => navigate(`/media/${media["media-id"]}`)}
                    />
                </li>
            ))}
        </ul>
    )
};