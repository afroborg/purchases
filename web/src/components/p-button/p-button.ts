import Vue from 'vue';

export default Vue.extend<any, any, any, any>({
  name: 'p-button',
  props: {
    to: String,
    href: String,
    block: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'primary'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click() {
      if (!this.disabled) this.$emit('click');
    }
  }
});