import { IProduct } from '@/models/IProduct';
import { Module } from 'vuex';

const baseProduct: IProduct = {
  category: '',
  photos: {
    product: undefined,
    ean: undefined,
    name: undefined,
  },
  price: {
    value: 0,
    currency: 'SEK',
  },
  quantity: 0,
};

export default {
  state: {
    product: baseProduct,
  },
  getters: {
    getProduct: (state) => state.product,
    getCategory: (state) => state.product.category,
    getPhotos: (state) => state.product.photos,
    getQuantity: (state) => state.product.quantity,
    getPrice: (state) => state.product.price,
  },
  actions: {
    updateProduct({ state, commit }, data: { key: string; value: any }) {
      commit('setProduct', { ...state.product, [data.key]: data.value });
    },
    clearProduct({ commit }) {
      commit('setProduct', baseProduct);
    },
    setProductImage({ state, commit }, data: { key: string; image: string }) {
      commit('setProduct', {
        ...state.product,
        photos: { ...state.product.photos, [data.key]: data.image },
      });
    },
    resetProduct({ commit }) {
      commit('setProduct', baseProduct);
    },
    setPrice({ state, commit }, price: IProduct['price']) {
      const product = { ...state.product };
      product.price = price;
      commit('setProduct', product);
    },
  },
  mutations: {
    setProduct: (state, product) => (state.product = product),
  },
} as Module<any, any>;
