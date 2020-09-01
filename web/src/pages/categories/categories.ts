import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend<any, any, any, any>({
  name: 'categories-page',
  computed: {
    ...mapGetters({
      categories: 'allCategories',
    }),
  },
  methods: {
    ...mapActions(['fetchCategories']),
    del(id: string) {
      console.log(id);
    },
  },
  mounted() {
    this.fetchCategories();
  },
});
