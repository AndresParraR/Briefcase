<template>
  <div class="df justify-center align-center flex-column">
    <v-card
      class="my-13 calendar-card"
      style="padding: 0 15px"
    > 
      <div class="d-flex grow flex-wrap contain-card-hover">
        <v-card class="card-inside-calendar">
          <v-slide-group active-class="success" class="slide-rol-aforo" show-arrows center-active style="height: 100%">
            <v-slide-item v-for="n in 2" :key="n">
              <div class="d-flex justify-center align-center flex-column" style="color: #fff;">
                <v-progress-circular
                  :rotate="270"
                  :size="widthSlide-109"
                  :width="15"
                  :value="20"
                  color="white"
                  style="margin-bottom: 1em"
                >
                  20
                </v-progress-circular>
                Visitors
              </div>
            </v-slide-item>
          </v-slide-group>
        </v-card>

        <div class="contain-actions" style="width: 100%">
          <v-tooltip bottom>
            <template v-slot:activator="{ on,  attrs}">
              <v-btn v-on="on" v-bind="attrs" color="primary" dark class="btn-actions" icon><v-icon class="icons-small">palette</v-icon></v-btn>
            </template>
            <span>Palette</span>
          </v-tooltip>
        </div>
      </div>

      <v-card-text class="contain-txt-down-info">
        <v-data-table
          class="datatable-capacity"
          style="background-color: #F5F5F5"
          :headers="headers"
          :items="[{name: 'Main entrance door', state: 1}, {name: 'Office 302', state: 2}, {name: 'Room 404', state: 0},]"
          hide-default-footer
          :disable-sort="true">
          
          <template v-slot:item.state="{ item }">
            <span :style="{'color':getColorState(item.state)}">{{getTxtState(item.state)}}</span>         
          </template>  

        </v-data-table>

        <v-divider></v-divider>
        <p class="txt-down-info"><v-icon>mdi-clock-outline</v-icon> <span>Updated 10 minutes ago</span></p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props:['Capacity'],
  mounted() {
    this.$store.state.overlay = false
    var containSlide = document.getElementsByClassName("v-slide-group__wrapper")
    this.widthSlide = containSlide[1].offsetWidth
  },
  data() {
    return {
      widthSlide: null,
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'State', value: 'state', align: 'end'},
      ],
    }
  },
  methods: {
    getColorState(state){
      switch(state){
        case 0:
          return 'black'
        case 1:
          return '#4caf50'
        case 2:
          return '#F44336'
      }
    },
    getTxtState(state){
      switch(state){
        case 0:
          return 'Inactivo'
        case 1:
          return 'Online'
        case 2:
          return 'Offline'
      }
    }
  }
}
</script>

<style>
.datatable-capacity td, .datatable-capacity th{
  padding: 0px !important;
}
.slide-rol-aforo .v-slide-group__content{
  justify-content: center;
}
</style>

<style scoped>

.calendar-card{
  width: 300px;
  box-shadow: 0 2px 22px 0 rgb(0 0 0 / 10%), 0 4px 20px 0 rgb(0 0 0 / 15%) !important;
  background-color: #F5F5F5;
}
.contain-actions{
  text-align: center;
  margin-top: -40px;
}
.card-inside-calendar{
  height: 250px;
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