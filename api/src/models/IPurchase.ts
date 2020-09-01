import { IBaseFirebaseDocument } from './IBaseFirebaseDocument';
import { IProduct } from './IProduct';
import { ISupplier } from './ISupplier';

export interface IPurchase extends IBaseFirebaseDocument {
  date: Date;
  products: IProduct[];
  supplier: ISupplier['name'];
}
