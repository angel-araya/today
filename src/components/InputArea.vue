<template>

  <div class="input-area">
    <div class="row">
      <div class="col-md-12">
        <textarea class="form-control" rows="10" name="input" placeholder="What did you do today?"></textarea>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <button @click="send()" class="btn btn-primary">Send</button>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'InputArea',
    data: function() {
      return {}
    },
    methods: {
      send: function() {
        console.log('Sent')
      }
    }
  }

</script>

<style>
  .input-area {
    margin: 2em;
  }

  button {
    margin: 1em;
  }

</style>
