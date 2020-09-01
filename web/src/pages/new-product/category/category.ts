import pList from '@/components/p-list/p-list.vue';
import { ICategory } from '@/models/ICategory';
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend<any, any, any, any>({
  name: 'category',
  components: {
    pList,
  },
  computed: {
    ...mapGetters(['allCategories', 'getCategory']),

    index() {
      return this.allCategories.findIndex(
        (c: ICategory) => c.name === this.getCategory
      );
    },
  },
  methods: {
    ...mapActions(['fetchCategories', 'updateProduct']),
    categoryChanged(supplier: ICategory) {
      this.updateProduct({ key: 'category', value: supplier.name });
      setTimeout(() => {
        this.$router.push('/purchases/add/products/add/photos');
      }, 200);
    },
  },
  mounted() {
    !this.allCategories.length && this.fetchCategories();
  },
});
