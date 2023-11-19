export interface IMediaPreview {
    height: number;
    width: number;
    "media-id": number;
    preview: string;
};

export interface IMedia {
    caption: string;
    categories: string[];
    cliplength: number;
    creationdate: string;
    creator: string;
    height: number;
    keywords: string;
    licencelanguagepointer: string;
    licenstype: string;
    masterimage: unknown;
    mediaReference: IMediaReference;
    mediaid: number;
    mediaidpadded: string;
    mediaprev: unknown;
    mediasrc: string;
    mediathumb: string;
    mediatype: string;
    searchindexing: boolean;
    similarmedia: unknown;
    source: string;
    territoryrestrictions: string;
    title: string;
    usagelicences: IMediaUsageLicense[];
    width: number;
};

export interface IMediaReference {
    id: number;
    source: string;
    type: string;
};

export interface IMediaUsageLicense {
    credits: number;
    currency: string;
    languagePointer: string;
    licenseid: number;
    name: string;
    price: number;
};