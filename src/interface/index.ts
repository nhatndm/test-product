export interface MapAttribute {
  position: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

export interface Product {
  id: number;
  image: string;
  title: string;
}

export interface HotNew {
  id: number;
  image: string;
  title: string;
  subTitle: string;
}
