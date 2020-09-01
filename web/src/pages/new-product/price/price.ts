import pButton from '@/components/p-button/p-button.vue';
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend<any, any, any, any>({
  name: 'price',
  components: {
    pButton
  },
  computed: {
    ...mapGetters(['getPrice'])
  },
  methods: {
    ...mapActions(['setPrice']),
    input(e: any) {
      const value = parseInt(e.target.value);
      if (value > -1) {
        this.setPrice({ value, currency: this.getPrice.currency });
      }
    },
    changeCurrency() {
      this.setPrice({ value: this.getPrice.value, currency: this.getPrice.currency === 'SEK' ? 'EUR' : 'SEK' });
    }
  }
});