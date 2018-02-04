![demoGif](https://i.imgur.com/zM0vitr.gif)
## VueConfirmationButton

A Vue.js [single file component](https://vuejs.org/v2/guide/single-file-components.html) that will generate a button that requires the user to press it multiple times in order to confirm a designated action

### Why would i need that?

Think of a sensitive scenario, something like deleting data. Having the user read multiple warning messages before performing an action will help prevent unwanted deletions.

[Live Demo](http://rohanlikhite.com/projects/vueConfirmationButton/)

## Install

#### Yarn

`yarn add vue-confirmation-button`

#### Manual

Manually download the .vue component (located in the dist) folder and add that to your project. 


#### JS

```js
import vueConfirmationButton from 'vue-confirmation-button';

const demo = new Vue({
  el: '.app',
  components: {
    'vue-confirmation-button': vueConfirmationButton,
  },
  data: {
    customMessages: [
      'Delete User',
      'Are you sure?',
      'Ok!'
    ],
  },
  methods: {
    deleteUser() {
      // Your Logic Here 
    },
  },
});
```

#### HTML

```html
<div class="confirmation__button">
  <vue-confirmation-button
    :messages="customMessages"
    v-on:confirmation-success="deleteUser()">
  </vue-confirmation-button>
</div>
```
## Details

### Props

This component supports 2 props

1. *messages*: An array of strings that will be displayed to the user. The last message being shown after confirmation has succeeded
2. *css*: A string representing the css style that will be applied to the `<button>` element

### Events

This component emits 3 events

1. *confirmation-success*: The user has clicked the button all the way through and has successfully confirmed the action
2. *confirmation-incremented*: Fired everytime the user clicks the button
3. *confirmation-reset*: The button has been reset (see above for example)

Also there's a `reset` method in case you need to reset your button status. To use it you'll need to add a `ref` to your button and call it from there.

e.g.:

In your template:

```html
<vue-confirmation-button ref="confirmationButton"></vue-confirmation-button>
```

In your method:

```js
resetButton() {
  demo.$refs.confirmationButton.reset()
  // Your Logic Here
},
```

## Credits

Design inspiration: [Simple button animation with final check
by Anna Ida D'Alessandro](https://dribbble.com/shots/4083243-Simple-button-animation-with-final-check)


## MIT License


Copyright (c) 2018 Rohan Likhite

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
