/* eslint-disable prettier/prettier */
//https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg

export interface ArtistResponse {
    external_urls: ExternalUrls;
    followers:     Followers;
    genres:        string[];
    href:          string;
    id:            string;
    images:        Image[];
    name:          string;
    popularity:    number;
    type:          string;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Followers {
    href:  null;
    total: number;
}

export interface Image {
    height: number;
    url:    string;
    width:  number;
}
