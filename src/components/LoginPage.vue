<template>
  <div class="grid-container">
      <div class="item-1 center-flex">
        <input class="" type="text" placeholder="Username">
      </div>

      <div class="item-2 center-flex">
        <input class="" type="password" placeholder="Password">
      </div>

      <div class="item-3 center-flex">
        <input @click="login()" type="submit" class="btn btn-info" value="Log in">
      </div>
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
        let url = `${process.env.PROTOCOL}://${process.env.SERVER}:${process.env.PORT}`
        this.$http.post(`${url}/api/auth`, options).then(data => {
          localStorage.token = data.body.token
          this.haveToken = true
        }).catch(error => {
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

<style scoped>
.grid-container {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr)
}

.center-flex {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
}

input {
  text-align: center;
}

.item-1 {
  grid-row: 1;
}

.item-2 {
  grid-row: 2;
}

.item-3 {
  grid-row: 3;
}

</style>
