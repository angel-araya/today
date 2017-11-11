
<template>
  <div class="row time-header">
    <div class="col">
      <h3 class="">{{ computedDate }}</h3>
    </div>
    <div class="col">
      <h3 class="right-align">{{ computedTime }}</h3>
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

<style>
  .right-align {
    float: right;
  }

  .time-header{
    margin: 2em;
  }
</style>
