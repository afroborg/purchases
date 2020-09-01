import { IProduct } from './IProduct';

export interface IPurchase {
  name?: string;
  id?: string;
  date: Date;
  supplier: string;
  products: IProduct[];
}
