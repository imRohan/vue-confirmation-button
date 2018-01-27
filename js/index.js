// JS
import Vue from 'vue'

// Components
import vueConfirmation from '../src/vue-confirmation-button.vue'

// Vue Plugins

// VueJS Mount
const demo = new Vue({
  el: '.app',
  data: {
    app: {
      name: "vue-confirmation-button-demo",
    },
  },
  components: {
    'confirmation-button': vueConfirmation,
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  },
})
