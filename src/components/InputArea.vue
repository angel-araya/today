<template>

  <div class="input-area">
    <div class="row">
      <div class="col-md-12">
        <textarea v-model="text" class="form-control" rows="10" name="input" placeholder="What did you do today?"></textarea>
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
      return {
        text: ""
      }
    },
    methods: {
      send: function() {
        console.log("sending")
        this.$http.get('https://jsonplaceholder.typicode.com/posts/1')
          .then(data => {
            this.text = data.body.title
          })
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
