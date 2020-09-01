import { routes } from '@/router/routes';
import Vue from 'vue';

export default Vue.extend<any, any, any, any>({
  name: 'navbar',
  computed: {
    currentRoute() {
      return this.$route.path;
    }
  },
  data() {
    return {
      toggled: false,
      routes: routes.filter(r => r.inMenu)
    }
  },
  methods: {
    toggleMenu() {
      this.toggled = !this.toggled;
    }
  }
});