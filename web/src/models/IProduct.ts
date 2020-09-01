export interface IProduct {
  category: string;
  photos: IProductPhotos;
  quantity: number;
  price: IProductPrice;
}

export interface IProductPhotos {
  product?: string;
  ean?: string;
  name?: string;
}

export interface IProductPrice {
  value: number;
  currency: 'SEK' | 'EUR';
}