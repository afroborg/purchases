import { getAsync } from '@/helpers/http-helpers';
import { ISupplier } from '@/models/ISupplier';
import { Module } from 'vuex';

export default {
  state: {
    suppliers: [] as ISupplier[],
  },
  getters: {
    allSuppliers: (state) => state.suppliers,
  },
  actions: {
    async fetchSuppliers({ commit }) {
      const suppliers = await getAsync<ISupplier[]>('suppliers');
      commit('setSuppliers', suppliers);
    },
  },
  mutations: {
    setSuppliers: (state, suppliers) => (state.suppliers = suppliers),
  },
} as Module<any, any>;
