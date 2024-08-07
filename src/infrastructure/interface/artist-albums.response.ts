/* eslint-disable prettier/prettier */
export interface ArtistAlbumsResponse {
    href:     string;
    items:    Item[];
    limit:    number;
    next:     string;
    offset:   number;
    previous: null;
    total:    number;
}

export interface Item {
    album_group:            AlbumGroup;
    album_type:             AlbumGroup;
    artists:                Artist[];
    available_markets:      string[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    name:                   string;
    release_date:           string;
    release_date_precision: ReleaseDatePrecision;
    total_tracks:           number;
    type:                   AlbumGroup;
    uri:                    string;
}

export enum AlbumGroup {
    Album = "album",
    Single = "single",
}

export interface Artist {
    external_urls: ExternalUrls;
    href:          string;
    id:            ID;
    name:          Name;
    type:          Type;
    uri:           URI;
}

export interface ExternalUrls {
    spotify: string;
}

export enum ID {
    The0TnOYISbd1XYRBk9Myaseg = "0TnOYISbd1XYRBk9myaseg",
    The1YX62RHDYysNcIRO33WQxJ = "1yX62RHdYysNcIrO33WQxJ",
    The37G8DfNgO4MQ3PKh5DroSo = "37G8DfNgO4mQ3PKh5droSo",
    The6RFjbxELOWFXv54T6CcuRZ = "6RFjbxELOWFXv54t6ccuRZ",
}

export enum Name {
    DaniFlow = "Dani Flow",
    JorgeGomez = "Jorge Gomez",
    OsmaniGarciaLaVoz = "Osmani Garcia \"La Voz\"",
    Pitbull = "Pitbull",
}

export enum Type {
    Artist = "artist",
}

export enum URI {
    SpotifyArtist0TnOYISbd1XYRBk9Myaseg = "spotify:artist:0TnOYISbd1XYRBk9myaseg",
    SpotifyArtist1YX62RHDYysNcIRO33WQxJ = "spotify:artist:1yX62RHdYysNcIrO33WQxJ",
    SpotifyArtist37G8DfNgO4MQ3PKh5DroSo = "spotify:artist:37G8DfNgO4mQ3PKh5droSo",
    SpotifyArtist6RFjbxELOWFXv54T6CcuRZ = "spotify:artist:6RFjbxELOWFXv54t6ccuRZ",
}

export interface Image {
    height: number;
    url:    string;
    width:  number;
}

export enum ReleaseDatePrecision {
    Day = "day",
    Year = "year",
}
