import { IMedia } from "../../types";

interface IMediaInfoProps {
    mediaData: IMedia;
};

export const MediaInfo = ({ mediaData }: IMediaInfoProps) => {
    return (
        <>
            <div className="media-info-container">
                <p className="media-info__creator"><span>CREDIT</span><span>{mediaData.creator}</span></p>
                <p className="media-info__imageid"><span>IMAGE ID</span><span>{mediaData.mediaid}</span></p>
                <p className="media-info__size"><span>MAX SIZE</span><span>{mediaData.width}×{mediaData.height} PIXELS</span></p>
                <p className="media-info__date"><span>DATE</span><span>{mediaData.creationdate}</span></p>
                <p className="media-info__caption"><span>INFO</span><span>{mediaData.caption}</span></p>
            </div>
        </>
    );
};