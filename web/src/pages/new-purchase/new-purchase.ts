import progressIndicator from '@/components/progress-indicator/progress-indicator.vue';
import { IProgressIndicatorStep } from '@/models/IProgressIndicatorStep';
import Vue from 'vue';

export default Vue.extend<any, any, any, any>({
  name: 'new-purchase',
  components: {
    progressIndicator
  },
  computed: {
    steps() {
      return [
        {
          title: 'Leverantör',
          link: '/purchases/add/supplier',
          status: this.$route.path === '/purchases/add/supplier' ? 'active' : 'inactive'
        },
        {
          title: 'Produkter',
          link: '/purchases/add/products',
          status: this.$route.path === '/purchases/add/products' ? 'active' : 'inactive'
        },
        {
          title: 'Sammanfattning',
          link: '/purchases/add/summary',
          status: this.$route.path === '/purchases/add/summary' ? 'active' : 'inactive'
        }
      ] as IProgressIndicatorStep[];
    }
  },
});