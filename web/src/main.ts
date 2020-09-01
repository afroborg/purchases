import App from '@/app/app.vue';
import router from '@/router';
import store from '@/store';
import Vue from 'vue';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
