<template>
  <div id='app'>
    <span>
      <button v-on:click='clicked'> {{ message }} </button>
    </span>
  </div>
</template>

<script>
  // test done via copy&pasting onto vueCli/App.vue
  // QUESTION; why data(), methods : ???
  export default {
      name: 'app',
      data() {
        return {
          message: 'click this button'
      }
    },
    methods: {
      clicked: function() {
        alert(this.message);
      }
    }
  }
</script>

<style>
  span {
      font-size: 1.2em;
  }
</style>
