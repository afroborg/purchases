import { ISupplier } from '../models/ISupplier';
import { deleteDoc, getDocs, setDoc } from '../services/firebase-services';

const COLLECTION = 'suppliers';

export const getSuppliers = (): Promise<ISupplier[]> =>
  new Promise((resolve, reject) => {
    getDocs<ISupplier>(COLLECTION).then(resolve).catch(reject);
  });

export const setSupplier = (data: ISupplier): Promise<any> =>
  setDoc(COLLECTION, data);

export const deleteSupplier = (uid: string): Promise<any> =>
  deleteDoc(COLLECTION, uid);
