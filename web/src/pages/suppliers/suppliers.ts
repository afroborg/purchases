import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend<any, any, any, any>({
  name: 'suppliers-page',
  computed: {
    ...mapGetters({
      suppliers: 'allSuppliers',
    }),
  },
  methods: {
    ...mapActions(['fetchSuppliers']),
    del(id: string) {
      console.log(id);
    },
  },
  mounted() {
    this.fetchSuppliers();
  },
});
