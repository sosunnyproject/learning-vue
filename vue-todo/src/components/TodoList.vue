<template>
  <section>
    <ul>
      <li>1. 할일</li>
      <li>2. 할일</li>
      <li>3. 할일</li>
    </ul>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        todoItems: []
      }
    },
    created() {
      if (localStorage.length > 0) {
        for (var i = 0;i<localStorage.length; i++) {
          this.todoItems.push(localStorage.key(i));
        }
      }
    }
  }
</script>

<style>
</style>