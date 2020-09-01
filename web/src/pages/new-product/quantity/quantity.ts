import pButton from '@/components/p-button/p-button.vue';
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend<any, any, any, any>({
  name: 'quantity',
  components: {
    pButton
  },
  computed: {
    ...mapGetters(['getQuantity'])
  },
  methods: {
    ...mapActions(['updateProduct']),
    change(value: number) {
      if (this.getQuantity + value > -1)
        this.updateProduct({ key: 'quantity', value: this.getQuantity + value });
    },
    input(e: any) {
      const value = parseInt(e.target.value);
      if (value > -1) {
        this.updateProduct({ key: 'quantity', value });
      }
    }
  }
});