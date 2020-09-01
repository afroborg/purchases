import pButton from '@/components/p-button/p-button.vue';
import { IProduct } from '@/models/IProduct';
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend<any, any, any, any>({
  name: 'purchases',
  components: {
    pButton,
  },
  computed: {
    ...mapGetters(['allPurchases']),
  },
  methods: {
    ...mapActions(['fetchPurchases', 'deletePurchase']),
    photosStack(products: IProduct[]) {
      const photos = [];
      for (let i = 0; i < Math.min(products.length, 3); i++) {
        if (products[i].photos.product) {
          photos.push(products[i].photos.product);
        }
      }
      return photos;
    },
  },
  mounted() {
    this.fetchPurchases();
  },
});
