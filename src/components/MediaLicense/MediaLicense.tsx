import { IMedia } from "../../types";

interface IMediaLicenseProps {
    mediaData: IMedia;
};

export const MediaLicense = ({ mediaData }: IMediaLicenseProps) => {
    return (
        <>
            <h4 className="media-license__title">Choose your License</h4>
            <div className="media-license-container">
                <div className="license-type-container">
                    <span className="license-type__name">{mediaData.licenstype}</span>
                    <span className="license-type__price">
                        from {mediaData.usagelicences[0].price} {mediaData.usagelicences[0].currency}
                    </span>
                </div>
                <ul className="license-list">
                    {mediaData.usagelicences.map(license => (
                        <li key={license.licenseid}>
                            <div className="license-list__option">
                                <label className="license-option__label">{license.name}</label>
                                <input className="license-option__input" type="checkbox" />
                                <span className="license-option__price">{license.price} {license.currency}</span>
                            </div>
                        </li>
                    ))};
                </ul>
            </div>
            <button className="media-license__add-button">Add to Basket</button>
            <button className="media-license__buy-button">Buy Now</button>
        </>
    );
};