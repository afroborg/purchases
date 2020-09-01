import { IPurchase } from '@/models/IPurchase';
import { deleteAsync, postAsync } from './http-helpers';

export const createPurchase = (purchase: IPurchase) =>
  postAsync<IPurchase>('purchases', purchase);

export const deletePurchase = (id: string) => deleteAsync(`purchases/${id}`);
