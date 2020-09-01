import { ICategory } from '../models/ICategory';
import { deleteDoc, getDocs, setDoc } from '../services/firebase-services';

const COLLECTION = 'categories';

export const getCategories = (): Promise<ICategory[]> =>
  new Promise((resolve, reject) => {
    getDocs<ICategory>(COLLECTION).then(resolve).catch(reject);
  });

export const setCategory = (data: ICategory): Promise<any> =>
  setDoc(COLLECTION, data);

export const deleteCategory = (uid: string): Promise<any> =>
  deleteDoc(COLLECTION, uid);
