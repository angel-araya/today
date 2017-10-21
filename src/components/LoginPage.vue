<template>
  <div class="login-page">
    <form class="form-group container-fluid">
      <div class="row">
        <input class="form-control" type="text" placeholder="Username">
      </div>
      <br>
      <div class="row">
        <input class="form-control" type="password" placeholder="Password">
      </div>
      <br>
      <div class="row">
        <input v-if="haveToken" @click="newPost()" class="btn btn-primary" type="submit" value="New">
        <input v-if="!haveToken" @click="login()" type="submit" class="btn btn-info" value="Log in">
        <input v-else @click="logout()" type="submit" class="btn btn-warning" value="Log out">
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'LoginPage',
    data: function () {
      return {
        haveToken: false
      }
    },
    methods: {
      login() {
        const options = {
          user: 'angel',
          password: 'damian'
        }
        this.$http.post('http://localhost:8999/api/auth', options).then(data => {
          localStorage.token = data.body.token
          this.haveToken = true
        }, error => {
          console.log(`Error: ${error}`)
        })
      },

      logout() {
        localStorage.token = ""
        this.haveToken = false
      },
      newPost() {
        if (this.haveToken) {
          this.$router.push('/new')
        } else {
          console.log('ERROR, not haveToken')
        }
      }
    },
    mounted() {
      this.haveToken = localStorage.token !== ""
    }
  }

</script>

<style>
  .login-page {
    margin: 2em;
  }
</style>
