<template>
  <div>
    <v-card
      class="my-13 calendar-card mx-1"
      style="padding: 0 15px"
    > 
      <div class="d-flex grow flex-wrap contain-card-hover">
        <v-card class="card-inside-calendar">
          <v-sparkline
            :value="value"
            color="rgba(255, 255, 255, .7)"
            height="150"
            padding="24"
            stroke-linecap="round"
            smooth
          >
            <template v-slot:label="item">
              ${{ item.value }}
            </template>
          </v-sparkline>
        </v-card>

        <div class="contain-actions" style="width: 100%">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-on="on" v-bind="attrs" color="primary" dark class="btn-actions" icon><v-icon class="icons-small">palette</v-icon></v-btn>
            </template>
            <span>Palette</span>
          </v-tooltip>
        </div>
      </div>

      <v-card-text class="contain-txt-down-info">
        <h3>Laboratories Headquearters</h3>
        <p class="d-flex"><span style="color: #4caf50; margin-right: 0.4em; align-items: end" class="d-flex"><v-icon style="color: #4caf50; font-size: 18px">arrow_upward</v-icon> 52%</span> Increase in visitors in recent days</p>
        <v-divider></v-divider>
        <p class="txt-down-info"><v-icon>mdi-clock-outline</v-icon> <span>Updated 10 minutes ago</span></p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
// import VueApexCharts from "vue-apexcharts";
// import { mapState } from 'vuex'

export default {
  data() {
    return {
      value: [
        423,
        446,
        675,
        510,
        590,
        610,
        760,
      ],
    }
  },
}
</script>

<style scoped>

.calendar-card{
  width: 100%;
  box-shadow: 0 2px 22px 0 rgb(0 0 0 / 10%), 0 4px 20px 0 rgb(0 0 0 / 15%) !important;
  background-color: #F5F5F5;
}
.contain-actions{
  text-align: center;
  margin-top: -40px;
}
.card-inside-calendar{
  position: relative;
  z-index: 1;
  top: -30px;
  margin-bottom: -24px;
  transition: all .3s cubic-bezier(.34,1.61,.7,1);
  width: 100%;
  background-color: #00CFE6;
}
.contain-card-hover{
  margin-top: 10px;
}
.contain-card-hover:hover .card-inside-calendar{
  transform: translateY(-40px);
}
.btn-actions{
  margin: 0 10px;
}
.icons-small{
  font-size: 20px !important;
}
.txt-down-info{
  font-size: 0.8rem;
  margin-bottom: 5px !important;
}
.contain-txt-down-info{
  padding: 10px 16px;
}
.txt-down-info .v-icon{
  font-size: 1.2rem;
}
</style>