import pButton from '@/components/p-button/p-button.vue';
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend<any, any, any, any>({
  name: 'purchase-summary',
  components: {
    pButton,
  },
  computed: {
    ...mapGetters({
      purchase: 'getPurchase',
      cost: 'getTotalCost',
    }),
  },
  data() {
    return {
      name: `Nytt inköp`,
    };
  },
  methods: {
    ...mapActions(['newPurchase', 'resetPurchase']),
    async save() {
      await this.newPurchase({ ...this.purchase, name: this.name });
      this.resetPurchase();

      this.$router.push('/purchases');
    },
  },
});
