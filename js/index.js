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
    confirmed: false,
    customMessages: [
      'Custom Messages',
      'Can also be added',
      'How about a long string?',
      'That works too!',
      'What about Emoji?',
      'Yup! 🐒',
      'Ok!'
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
      this.confirmed = true
    }
  },
})
