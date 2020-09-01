import { getAsync } from '@/helpers/http-helpers';
import { ICategory } from '@/models/ICategory';
import { Module } from 'vuex';

export default {
  state: {
    categories: [] as ICategory[],
  },
  getters: {
    allCategories: (state) => state.categories,
  },
  actions: {
    async fetchCategories({ commit }) {
      const categories = await getAsync<ICategory[]>('categories');
      commit('setCategories', categories);
    },
  },
  mutations: {
    setCategories: (state, categories) => (state.categories = categories),
  },
} as Module<any, any>;
