import Vue from 'vue';

export default Vue.extend<any, any, any, any>({
  name: 'progress-incidator',
  props: {
    steps: {
      type: Array,
      required: true
    },
    currentStep: {
      type: Number,
      default: 0
    }
  }
});