import pList from '@/components/p-list/p-list.vue';
import { ISupplier } from '@/models/ISupplier';
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend<any, any, any, any>({
  name: 'supplier',
  components: {
    pList,
  },
  computed: {
    ...mapGetters(['allSuppliers', 'getSupplier']),
    index() {
      return this.allSuppliers.findIndex(
        (s: ISupplier) => s.name === this.getSupplier
      );
    },
  },
  methods: {
    ...mapActions(['fetchSuppliers', 'updatePurchase']),
    supplierChanged(supplier: ISupplier) {
      this.updatePurchase({ key: 'supplier', value: supplier.name });
      setTimeout(() => {
        this.$router.push('/purchases/add/products');
      }, 200);
    },
  },
  mounted() {
    !this.allSuppliers.length && this.fetchSuppliers();
  },
});
