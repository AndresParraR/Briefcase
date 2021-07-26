<template>
  <v-row class="fill-height">
    <v-col style="padding: 0;">
      <v-sheet height="64">
        <v-toolbar
          flat
        >
          <v-btn
            outlined
            class="mr-4"
            color="grey darken-2"
            @click="setToday"
          >
            <v-icon>mdi-map-marker</v-icon>
            Current Month
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="prev"
          >
            <v-icon small>
              mdi-chevron-left
            </v-icon>
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="next"
          >
            <v-icon small>
              mdi-chevron-right
            </v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" text>{{ $refs.calendar.title }}</v-btn>
              </template>
              <v-date-picker
                v-model="date"
                type="month"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn
                  text
                  color="primary"
                  @click="menu = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(date); focus = date+'-01';"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :type="type"
          @click:event="showEvent"
          @click:more="viewAllEvents"
          @change="updateRange"
        ></v-calendar>
        <v-menu
          content-class="menu-calendar"
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x >
          <v-card
            class="calendar-card"
            style="padding: 0 15px; margin-top: 50px;"
          > 
            <div class="d-flex grow flex-wrap contain-card-hover">
              <v-card class="card-inside-calendar">
                <v-app-bar
                  dark
                  :color="selectedEvent.color"
                  style="width: 100%"
                >
                  <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                </v-app-bar>
                <v-card-text>
                  <p style="font-size: 18px">Headquearter</p>
                  <p style="font-size: 16px">Room</p>
                  <p style="font-size: 16px">Juanito</p>
                </v-card-text>
              </v-card>

              <div class="contain-actions" style="width: 100%">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" class="btn-actions" icon><v-icon class="icons-small">mdi-pencil</v-icon></v-btn>
                  </template>
                  <span>Editar</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" class="btn-actions" icon ><v-icon class="icons-small">content_copy</v-icon></v-btn>
                  </template>
                  <span>Duplicar</span>
                </v-tooltip>
              </div>
            </div>

            <v-card-text class="contain-txt-down-info">
              <p class="txt-down-info"><v-icon>reduce_capacity</v-icon> max capacity: 10</p>
              <p class="txt-down-info"><v-icon>mdi-clock-outline</v-icon> 08:00 AM - 10:00AM</p>
            </v-card-text>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>

    <v-dialog
        v-model="dialogFullScreen"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
        <v-card>
          <v-toolbar
            flat
            dark
            color="primary"
            style="height: 64px; max-height:64px"
          >
            <v-btn
              icon
              dark
              @click="dialogFullScreen = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title style="text-transform: uppercase">{{getDateChoosed()}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Buscar"
              single-line
              hide-details
            ></v-text-field>
            <v-toolbar-items>
              <v-btn
                dark
                icon
                @click="dialogFullScreen = false"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <div class="d-flex justify-center align-center flex-wrap" style="height: 100%; overflow-y: scroll; padding-top: 2em">
            <v-card
              class="my-13 calendar-card mx-10"
              style="padding: 0 15px"
              v-for="n in 10"
              :key="n"
            > 
              <div class="d-flex grow flex-wrap contain-card-hover">
                <v-card class="card-inside-calendar">
                  <v-app-bar
                    dark
                    :color="selectedEvent.color"
                    style="width: 100%"
                  >
                    <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                  </v-app-bar>
                  <v-card-text>
                    <p>Headquearter</p>
                    <p>Room</p>
                    <p>Juanito</p>
                  </v-card-text>
                </v-card>

                <div class="contain-actions" style="width: 100%">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn v-bind="attrs" v-on="on" class="btn-actions" icon ><v-icon class="icons-small">mdi-pencil</v-icon></v-btn>
                    </template>
                    <span>Editar</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn v-bind="attrs" v-on="on" class="btn-actions" icon ><v-icon class="icons-small">content_copy</v-icon></v-btn>
                    </template>
                    <span>Duplicar</span>
                  </v-tooltip>
                </div>
              </div>

              <v-card-text class="contain-txt-down-info">
                <p class="txt-down-info"><v-icon>reduce_capacity</v-icon> Max Capacity: 10</p>
                <p class="txt-down-info"><v-icon>mdi-clock-outline</v-icon> 08:00 AM - 10:00AM</p>
              </v-card-text>
            </v-card>
          </div>
        </v-card>
      </v-dialog>
  </v-row>
</template>

<script>
import moment from 'moment'

  export default {
    data: () => ({
      dialog: false,
      dialogFullScreen: false,
      search: null,
      item: {},
      notifications: false,
      sound: true,
      widgets: false,
      date: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false,
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    }),
    mounted () {
      this.$refs.calendar.checkChange()
    },
    methods: {
      getDateChoosed(){
        return moment(this.focus).format('D MMMM YYYY');
      },
      viewAllEvents({ date }) {
        this.focus = date
        this.dialogFullScreen = true;
        this.dialog = false;
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = moment().format('YYYY-MM-DD')
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          requestAnimationFrame(() => requestAnimationFrame(() => open()))
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
      async updateRange ({ start, end }) {
        const events = []

        const min = new Date(`${start.date}T00:00:00`)
        const max = new Date(`${end.date}T23:59:59`)
        const days = (max.getTime() - min.getTime()) / 86400000
        const eventCount = this.rnd(days, days + 20)

        for (let i = 0; i < eventCount; i++) {
          const allDay = this.rnd(0, 3) === 0
          const firstTimestamp = this.rnd(min.getTime(), max.getTime())
          const first = new Date(firstTimestamp - (firstTimestamp % 900000))
          const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
          const second = new Date(first.getTime() + secondTimestamp)

          events.push({
            name: this.names[this.rnd(0, this.names.length - 1)],
            start: first,
            end: second,
            color: this.colors[this.rnd(0, this.colors.length - 1)],
            timed: !allDay,
          })
        }

        this.events = events
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
    },
  }
</script>

<style>
.v-calendar-weekly__day{
  cursor: pointer;
  transition: all ease .3s;
}
.v-calendar-weekly__day:hover{
  background-color: rgba(0,0,0,.04);
}
.menu-calendar{
  overflow: visible !important;
  contain: none;
  box-shadow: none;
  min-width: auto !important;
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