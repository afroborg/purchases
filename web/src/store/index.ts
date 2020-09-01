import Vue from 'vue';
import Vuex from 'vuex';
import categories from './modules/categories';
import product from './modules/product';
import purchase from './modules/purchase';
import purchases from './modules/purchases';
import suppliers from './modules/suppliers';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    purchases,
    suppliers,
    purchase,
    categories,
    product,
  },
});
