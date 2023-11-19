import { IMAGO_IMAGES_URL } from "../../constants";
import { IMediaPreview } from "../../types";
import { useNavigate } from "react-router-dom";

interface ISearchResultsProp {
    mediaResults: IMediaPreview[]
}

export const SearchResults = ({ mediaResults }: ISearchResultsProp) => {
    const navigate = useNavigate();

    return (
        <div className="search-results-container">
            {mediaResults.map(media => (
                <img src={`${IMAGO_IMAGES_URL}${media.preview}`}
                    className="searc-results__media"
                    key={media["media-id"]}
                    alt="media returned by search"
                    onClick={() => navigate(`/media/${media["media-id"]}`)}
                />
            ))}
        </div>
    )
};