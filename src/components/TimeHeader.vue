
<template>
  <div class="grid-container">
    <div class="">
      <h3 class="">{{ computedDate }}</h3>
    </div>
    <div class="item-3">
      <h3 class="">{{ computedTime }}</h3>
    </div>
  </div>
</template>

<script>
  import { pad } from './../util'

  export default {
    name: 'TimeHeader',
    data: function() {
      return {
        now: new Date(Date.now()),
        interval: null
      }
    },

    beforeCreate: function() {
      this.interval = setInterval(function() {
        this.now = new Date(Date.now())
      }.bind(this), 10)
    },

    beforeDestroy: function() {
      clearInterval(this.interval)
    },
    computed: {
      computedTime: function() {
        return `${pad(this.now.getHours())}:${pad(this.now.getMinutes())}:${pad(this.now.getSeconds())}`
      },

      computedDate: function() {
        return `${pad(this.now.getFullYear())}-${pad(this.now.getMonth()+1)}-${pad(this.now.getDate())}`
      }
    }
  }

</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;

  font-family: Arial;
}

.item-3 {
  grid-column: 3;
}

h3 {
  text-align: center;
}
</style>
