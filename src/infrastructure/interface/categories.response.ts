/* eslint-disable prettier/prettier */
//https://api.spotify.com/v1/browse/categories
export interface CategoriesResponse {
    categories: Categories;
}

export interface Categories {
    href:     string;
    items:    Item[];
    limit:    number;
    next:     string;
    offset:   number;
    previous: null;
    total:    number;
}

export interface Item {
    href:  string;
    id:    string;
    icons: Icon[];
    name:  string;
}

export interface Icon {
    height: number;
    url:    string;
    width:  number;
}
