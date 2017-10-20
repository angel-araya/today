
<template>
  <div class="login-page">
    This is the login page
    <br>
    <button @click="login()">Login</button>
  </div>
</template>

<script>
  export default {
    name: 'LoginPage',
    data: function() {
      return {}
    },
    methods: {
      login() {
        this.$router.replace('/new')
      }
    }
  }

</script>

<style>
  .login-page {
    margin: 2em;
  }
</style>
