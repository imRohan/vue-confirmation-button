// Made with love by Rohan Likhite

<template>
  <button
    :class="[css? css : 'confirmation-button__container']"
    :disabled='stepsComplete'
    v-on:click='incrementStep()'>
    {{ currentMessage }}
  </button>
</template>

<script>
  export default {
    name: 'vue-confirmation-button',
    props: ['messages', 'css'],
    data() {
      return {
        defaultSteps: [
          'Delete',
          'Are You Sure?',
          'For real?'
        ],
        currentStep: 0,
        stepsComplete: false,
      }
    },
    computed: {
      messageList() {
        return this.messages ? this.messages : this.defaultSteps
      },
      currentMessage() {
        return this.messageList[this.currentStep]
      },
    },
    methods: {
      incrementStep() {
        if (this.currentStep !== (this.messageList.length - 1)){
          this.currentStep++
        }
        else {
          this.confirmationComplete()
        }
      },
      confirmationComplete() {
        this.stepsComplete = true
        console.log('sending emit')
        this.$emit('confirmation-success')
      },
    },
  }
</script>

<style>
  .confirmation-button__container {
    display: inline-block;
    font-size: 1.5em;
  } 
</style>
