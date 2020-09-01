import { ICategory } from './ICategory';

export interface IProduct {
  category: ICategory['name'];
  photos: IProductPhotos;
  price: IProductPrice;
}

interface IProductPhotos {
  ean: string;
  name: string;
  product: string;
}

interface IProductPrice {
  currency: 'SEK' | 'EUR';
  value: number;
}
