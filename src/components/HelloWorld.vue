<template>

  <div class="hello">
    <h1>{{ msg }}</h1>

    <h2>| {{startDate.format('DD-MM-YYYY')}} ~ {{endDate.format('DD-MM-YYYY')}} |</h2>

    <md-button class="md-primary md-raised" @click="go('/DateRangePicker')">
      Open DateRangePicker
    </md-button>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to DateRange Picker Test'
    }
  },
  computed: {
    startDate() { return this.$store.state.search.startDate; },
    endDate() { return this.$store.state.search.endDate; },
  },
  methods: {
    go: function(route) { this.$router.push( route ); }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
