import { getAsync } from '@/helpers/http-helpers';
import { createPurchase, deletePurchase } from '@/helpers/purchases-helpers';
import { IPurchase } from '@/models/IPurchase';
import { Module } from 'vuex';

export default {
  state: {
    purchases: [] as IPurchase[],
  },
  getters: {
    allPurchases: (state) => state.purchases,
    purchasesCount: (state) => state.purchases.length,
  },
  actions: {
    async fetchPurchases({ commit }) {
      const response = await getAsync('purchases');
      commit('setPurchases', response);
    },
    async newPurchase({ commit }, data: IPurchase) {
      const response = await createPurchase(data);
      commit('addPurchase', response);
    },
    async deletePurchase({ commit, state }, id: string) {
      await deletePurchase(id);
      const purchases = [
        ...state.purchases.filter((p: IPurchase) => p.id && p.id !== id),
      ];
      commit('setPurchases', purchases);
    },
    // async updateCategory({ commit }, data: ICategory) {
    //   await updateCategory(data.id!, data);
    //   commit('editCategory', data);

    // }
  },
  mutations: {
    setPurchases: (state, purchases) => (state.purchases = purchases),
    addPurchase: (state, newPurchase: IPurchase) =>
      state.purchases.push(newPurchase),
    // editCategory: (state, editedCategory: ICategory) => {
    //   const index = state.categories.findIndex(c => c.id === editedCategory.id);
    //   state.categories[index] = toListCategory(editedCategory);
    // }
  },
} as Module<any, any>;
