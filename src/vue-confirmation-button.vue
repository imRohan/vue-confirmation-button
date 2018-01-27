// Made with love by Rohan Likhite

<template>
  <button
    class="confirmation-button"
    :class="[
      css? css : '',
      stepsComplete? 'confirmation-button__complete' : ''
    ]"
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
          'For real?',
          '✔',
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
      lastMessageIndex() {
        return this.messageList.length - 2
      }
    },
    methods: {
      incrementStep() {
        if (this.currentStep !== this.lastMessageIndex) {
          this.currentStep++
        }
        else {
          this.confirmationComplete()
        }
      },
      confirmationComplete() {
        this.stepsComplete = true
        this.currentStep = this.messageList.length - 1
        console.log('sending emit')
        this.$emit('confirmation-success')
      },
    },
  }
</script>

<style>
  .confirmation-button {
    display: block;
    background: #5B64B4;
    font-size: 0.7em;
    font-weight: 700;
    color: #ffffff;
    border-radius: 40px;
    height: 40px;
    width: 130px;
    outline: 0;
    cursor: pointer;
    border: 1px solid rgba(255,255,255,0.2);
    -webkit-transition: background 0.3s ease-in,
                        font-size 0.4s ease-in-out,
                        width 0.1s linear;
    transition: background 0.3s ease-in,
                font-size 0.4s ease-in-out,
                width 0.1s linear;
  }
  .confirmation-button__complete {
    cursor: not-allowed;
    background: #79BA7A;
    width: 40px;
    font-size: 1em;
  } 
</style>
