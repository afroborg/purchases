import pButton from '@/components/p-button/p-button.vue';
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend<any, any, any, any>({
  name: 'product-summary',
  components: {
    pButton
  },
  computed: {
    ...mapGetters({
      product: 'getProduct',
      purchasesCount: 'purchasesCount',
      supplier: 'getSupplier',
    })
  },
  methods: {
    ...mapActions(['addProduct', 'resetProduct']),
    addToPurchase() {
      this.addProduct(this.product);
      this.resetProduct();
      this.$router.push('/purchases/add/products');
    }
  }
});