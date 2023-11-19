import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SEARCH_API_URL } from "../constants";
import { IMedia } from "../types";
import { MediaLicense } from "../components/MediaLicense/MediaLicense";
import { MediaInfo } from "../components/MediaInfo/MediaInfo";

export const Media = () => {
    const { mediaId } = useParams();
    const [mediaData, setMediaData] = useState<IMedia | null>(null);

    useEffect(() => {
        const requestMediaData = async () => {
            try {
                const response = await fetch(`${SEARCH_API_URL}/media/${mediaId}`);
                const responseData = await response.json();

                console.log(responseData);

                setMediaData(responseData);
            } catch {
                setMediaData(null);
            }
        };

        requestMediaData();
    }, []);


    return (
        <>
            {
                mediaData && <div className="media-container">
                    <div className="media-preview-container">
                        <h2 className="media-preview__title">{mediaData.title}</h2>
                        <img src={mediaData.mediasrc} className="media-preview__image" alt={mediaData.title} />
                    </div>
                    <div className="media-license-info-container">
                        <MediaLicense mediaData={mediaData} />
                        <span className="media-license-info__divider"></span>
                        <MediaInfo mediaData={mediaData} />
                    </div>
                </div>
            }
        </>

    );
};