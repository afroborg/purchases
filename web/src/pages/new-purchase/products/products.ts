import pButton from '@/components/p-button/p-button.vue';
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend<any, any, any, any>({
  name: 'products',
  components: {
    pButton
  },
  computed: {
    ...mapGetters({
      products: 'purchaseProducts'
    }),
  },
  methods: {
    ...mapActions(['removeProduct']),
  }

});