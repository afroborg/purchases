import pButton from '@/components/p-button/p-button.vue';
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend<any, any, any, any>({
  name: 'photos',
  components: {
    pButton
  },
  computed: {
    ...mapGetters(['getPhotos']),
    allDone() {
      return this.getPhotos['product'] && this.getPhotos['ean'] && this.getPhotos['name'];
    }
  },
  data() {
    return {
      buttons: [
        {
          title: 'Produktbild',
          icon: 'far fa-lightbulb',
          key: 'product'
        },
        {
          title: 'EAN kod',
          icon: 'far fa-barcode-scan',
          key: 'ean'
        },
        {
          title: 'Produktnamn',
          icon: 'far fa-address-card',
          key: 'name'
        }
      ],
      key: 'product'
    }
  },
  methods: {
    ...mapActions(['setProductImage']),
    fileUpload(key: string, e: Event) {
      const target = e.target as HTMLInputElement;
      if (target.files?.length) {
        const file = target.files[0];

        this.setProductImage({ key, image: URL.createObjectURL(file) })
      }
    },
    triggerUpload(key: string) {
      document.getElementById(`hidden-file-input__${key}`)?.click();
      this.setKey(key);
    },
    setKey(key: string) {
      this.key = key;
    }
  }

});