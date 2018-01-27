// Made with love by Rohan Likhite

// JS
import Vue from 'vue'

// Components
import vueConfirmation from '../src/vue-confirmation-button.vue'

// VueJS Mount
const demo = new Vue({
  el: '.app',
  data: {
    app: {
      name: 'vue-confirmation-button-demo',
    },
    customMessages: [
      'Does this work',
      'I think so'
    ],
  },
  components: {
    'vue-confirmation-button': vueConfirmation,
  },
  computed: {
  },
  methods: {
    finished() {
      console.log('emit caught!')
    }
  },
  mounted() {
  },
})
