<template>
  <div class="container-fluid" id="app">
    <time-header></time-header>
    <input-area></input-area>
  </div>
</template>

<script>
import TimeHeader from '@/components/TimeHeader.vue'
import InputArea from "./components/InputArea.vue";

export default {
  name: 'app',
  components: {
    InputArea,
    TimeHeader
  }
}
</script>

<style scoped>

  time-header {
    margin: 5em;
  }

</style>
