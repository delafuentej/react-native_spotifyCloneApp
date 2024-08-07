/* eslint-disable prettier/prettier */
//https://api.spotify.com/v1/browse/categories/${category-name}
export interface CategoryResponse {
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
