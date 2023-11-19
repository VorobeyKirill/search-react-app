import { IMedia } from "../../types";

import "./MediaLicense.scss";

interface IMediaLicenseProps {
    mediaData: IMedia;
};

export const MediaLicense = ({ mediaData }: IMediaLicenseProps) => {
    const { licensetype, usagelicences } = mediaData;

    return (
        <>
            <h4 className="media-license__title">Choose your License</h4>
            <div className="media-license-container">
                <div className="license-type-container">
                    <span className="license-type__name">{licensetype}</span>
                    <span className="license-type__price">
                        <span className="license-type__price-prefix">from</span>&nbsp;
                        {usagelicences[0].price} {usagelicences[0].currency}
                    </span>
                </div>
                <span className="media-license__divider"></span>
                <ul className="license-list">
                    {usagelicences.map((license, index) => (
                        <li key={license.licenseid}>
                            <div className="license-list__option">
                                <div>
                                    <input id={`${license.licenseid}`} className="license-option__input" type="radio" name="license" />
                                    <label htmlFor={`${license.licenseid}`} className="license-option__label">{license.name}</label>
                                </div>
                                <span className="license-option__price">{license.price} {license.currency}</span>
                            </div>
                            {index !== usagelicences.length - 1 &&
                                <span className="license-list__divider"></span>
                            }
                        </li>
                    ))}
                </ul>
            </div>
            <div className="media-license-buttons-container">
                <button className="media-license__add-button">Add to Basket</button>
                <button className="media-license__buy-button">Buy Now</button>
            </div>
        </>
    );
};