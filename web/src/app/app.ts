import navbar from '@/components/layout/navbar/navbar.vue';
import Vue from 'vue';

export default Vue.extend<any, any, any, any>({
  name: 'app',
  components: {
    navbar
  },
  watch: {
    $route(to) {
      document.title = `${to.name} | Purchases`;
    }
  },

});