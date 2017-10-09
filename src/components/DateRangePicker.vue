<template>

  <span>
  <md-button class="md-raised md-secondary" @click="go('/')">
    &lt; Back
  </md-button>

  <h3>{{range.startDate.format('DD-MMM-YYYY')}} - {{range.endDate.format('DD-MMM-YYYY')}}</h3>

  <date-range class="calendar" 
    :sync-range.sync="range" 
    :lang="lang"
    :firstDayOfWeek="firstDayOfWeek"
    @change="onChange"></date-range>

  </span>
</template>

<script>
import {DateRange} from 'vue-date-range';
var moment = require('moment');

export default {
  name: 'DateRangePicker',
  components: { DateRange },
  props: [],
  data: function() {
    return {
      firstDayOfWeek: 0,
      lang: 'en',
      range: {
        startDate: moment(),
        endDate: moment().add(7, 'days')
      },
    };
  },
  computed: {
  },
  methods: {
    go(route) { this.$router.push(route); },
    onChange( range ) {
      this.range = range;
      this.$store.dispatch('searchDateRange', range );
    },
    // setRange( p ) {
    //   if (typeof p === 'number') {
    //  console.log(p)
    //  this.range = {
    //    startDate: moment().add(p, 'days'),
    //    endDate: moment()
    //  }
    //   }
    // },
  },
  created: function() {
    this.range = {
      startDate: moment(this.$store.state.search.startDate),
      endDate: moment(this.$store.state.search.endDate),
    };
  },
}
</script>

<style>

.ayou-day-cell .solar {
  width: 97%;
}

.ayou-day-cell .solar.selected {
  border-radius: 0%;
  background-color: @primary;
  color: #fff;
}
.ayou-day-cell .solar.in-range {
  border-radius: 0%;
  background-color: @primary-light;
  color: #fff;
}
</style>