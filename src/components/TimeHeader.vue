
<template>
  <div class="row time-header">
    <div class="col-md-6">
      <h3 class="">{{ date }}</h3>
    </div>
    <div class="col-md-6">
      <h3 class="right-align">{{ time }}</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TimeHeader',
    data: function() {
      return {
        time: "",
        date: "",
        interval: null
      }
    },
    methods: {
      updateTime() {
        let now = new Date(Date.now())
        this.time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
        this.date = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
      }
    },

    beforeCreate: function() {
      this.interval = setInterval(function() {
        this.updateTime()
      }.bind(this), 10)
    },

    beforeDestroy: function() {
      clearInterval(this.interval)
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
