import moment from "moment";
import { IMedia } from "../../types";

import "./MediaInfo.scss";

interface IMediaInfoProps {
    mediaData: IMedia;
};

export const MediaInfo = ({ mediaData }: IMediaInfoProps) => {
    return (
        <>
            <div className="media-info-container">
                <p className="media-info__line">
                    <span className="media-info__line--right">CREDIT</span>
                    <span className="media-info__line--left">{mediaData.creator}</span>
                </p>
                <p className="media-info__line">
                    <span className="media-info__line--right">IMAGE ID</span>
                    <span className="media-info__line--left">{mediaData.mediaid}</span>
                </p>
                <p className="media-info__line">
                    <span className="media-info__line--right">MAX SIZE</span>
                    <span className="media-info__line--left">{mediaData.width}×{mediaData.height} PIXELS</span>
                </p>
                <p className="media-info__line">
                    <span className="media-info__line--right">DATE</span>
                    <span className="media-info__line--left">{moment(mediaData.creationdate).format('DD.MM.YYYY')}</span>
                </p>
                <p className="media-info__line">
                    <span className="media-info__line--right">INFO</span>
                    <span className="media-info__line--left">{mediaData.caption}</span>
                </p>
            </div>
        </>
    );
};