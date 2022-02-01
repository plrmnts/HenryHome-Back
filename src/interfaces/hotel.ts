export interface Hotel {
    hotelId: string;
    name: string;
    starRating: number;
    currency: string;
    description: Description;
    websiteUrl: string;
    externalUrls: ExternalURL[];
    phoneNumbers: string[];
    emails: string[];
    images: Image[];
    address: Address;
    location: Location;
    amenities: HotelAmenity[];
    roomTypes: RoomType[];
    roomCount: number;
    checkIn: Check;
    checkOut: Check;
    contractable: boolean;
    termsAndConditions: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Address {
    line1: string;
    line2: string;
    city: string;
    region: string;
    country: string;
    countryName: string;
    postalCode: string;
}

export interface HotelAmenity {
    code: number;
    formatted: string;
}

export interface Check {
    from: string;
    to: string;
}

export interface Description {
    short: string;
}

export interface ExternalURL {
    name: string;
    url: string;
}

export interface Image {
    altText: string;
    height: number;
    width: number;
    url: string;
}

export interface Location {
    latitude: number;
    longitude: number;
}

export interface RoomType {
    roomTypeId: string;
    name: string;
    description: string;
    maxOccupancy: number;
    rates: ImageElement[];
    images: ImageElement[];
    amenities: ImageElement[];
}

export interface ImageElement {
}
