import progressIndicator from '@/components/progress-indicator/progress-indicator.vue';
import { IProgressIndicatorStep } from '@/models/IProgressIndicatorStep';
import Vue from 'vue';

export default Vue.extend<any, any, any, any>({
  name: 'new-product',
  components: {
    progressIndicator
  },
  computed: {
    steps() {
      return [
        {
          title: 'Kategori',
          link: '/purchases/add/products/add/category',
          status: this.$route.path === '/purchases/add/products/add/category' ? 'active' : 'inactive'
        },
        {
          title: 'Bilder',
          link: '/purchases/add/products/add/photos',
          status: this.$route.path === '/purchases/add/products/add/photos' ? 'active' : 'inactive'
        },
        {
          title: 'Antal',
          link: '/purchases/add/products/add/quantity',
          status: this.$route.path === '/purchases/add/products/add/quantity' ? 'active' : 'inactive'
        },
        {
          title: 'Pris',
          link: '/purchases/add/products/add/price',
          status: this.$route.path === '/purchases/add/products/add/price' ? 'active' : 'inactive'
        },
        {
          title: 'Sammanfattning',
          link: '/purchases/add/products/add/summary',
          status: this.$route.path === '/purchases/add/products/add/summary' ? 'active' : 'inactive'
        },
      ] as IProgressIndicatorStep[];
    }
  }

});