import { IPurchase } from '../models/IPurchase';
import { deleteDoc, getDocs, setDoc } from '../services/firebase-services';

const COLLECTION = 'purchases';

export const getPurchases = (): Promise<IPurchase[]> =>
  new Promise((resolve, reject) => {
    getDocs<IPurchase>(COLLECTION).then(resolve).catch(reject);
  });

export const setPurchase = (data: IPurchase): Promise<any> =>
  setDoc(COLLECTION, { ...data, date: new Date(data.date) });

export const deletePurcase = (id: string): Promise<any> =>
  deleteDoc(COLLECTION, id);
