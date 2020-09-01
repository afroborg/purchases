import { IProduct } from '@/models/IProduct';
import { IPurchase } from '@/models/IPurchase';
import { Module } from 'vuex';

const BASE_PURCHASE: IPurchase = {
  name: 'Nytt inköp',
  date: new Date(),
  supplier: '',
  products: [],
};

export default {
  state: {
    purchase: { ...BASE_PURCHASE },
  },
  getters: {
    getPurchase: (state) => state.purchase,
    getSupplier: (state) => state.purchase.supplier,
    purchaseProducts: (state) => state.purchase.products,
    getTotalCost: (state) => {
      let total = 0;
      for (let i = 0; i < state.purchase.products.length; i++) {
        const product = state.purchase.products[i];
        total += product.price.value * product.quantity;
      }
      return { total, currency: state.purchase.products[0].price.currency };
    },
  },
  actions: {
    updatePurchase({ state, commit }, data: { key: string; value: any }) {
      commit('setPurchase', { ...state.purchase, [data.key]: data.value });
    },
    removeProduct({ state, commit }, index: number) {
      const purchase = { ...state.purchase };
      purchase.products.splice(index, 1);
      commit('setPurchase', purchase);
    },
    addProduct({ state, commit }, product: IProduct) {
      const purchase = { ...state.purchase };
      purchase.products.push(product);
      commit('setPurchase', purchase);
    },
    resetPurchase({ commit }) {
      commit('setPurchase', BASE_PURCHASE);
    },
  },
  mutations: {
    setPurchase: (state, purchase) => (state.purchase = purchase),
  },
} as Module<any, any>;
