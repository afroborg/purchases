import Vue from 'vue';

export default Vue.extend<any, any, any, any>({
  name: 'p-list',
  props: {
    items: {
      type: Array,
      required: true
    },
    textProp: {
      type: String,
      default: 'text'
    },
    keyProp: {
      type: String,
      default: 'key'
    },
    selectedIndex: Number,
  },
  methods: {
    change(item: any) {
      this.$emit('change', item);
    }
  }
});