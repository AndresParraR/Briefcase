<template>
  <nav>
    <v-app-bar
      id="app-bar"
      absolute
      app
      color="transparent"
      flat
      height="75"
    >

      <v-btn class="btn-app-bar" fab @click="expandOnHover = !expandOnHover"><v-icon>{{drawer ? 'mdi-dots-vertical' : 'mdi-view-list'}}</v-icon></v-btn>

      <v-spacer />

      <v-toolbar-title
        v-text="nameTitle"
      />

      <v-spacer />
      <v-progress-circular
        indeterminate
        color="primary"
        v-show="$store.state.isLoading"
        class="mx-2"
      ></v-progress-circular>
      <div class="mx-3">
        <v-btn icon :style="{'background-color': $store.state.colour}"><v-icon >mdi-view-dashboard</v-icon></v-btn>
        <v-btn icon color="black">
          <v-badge
            color="red"
            content="5">
            <v-icon >notifications</v-icon>
          </v-badge>
        </v-btn>
        <v-menu
          offset-y
          transition="slide-y-transition"
          :open-on-hover="false"
          class="boder-r">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="black"
              v-bind="attrs"
              v-on="on"
              icon
            >
              <v-icon >person</v-icon>
            </v-btn>
          </template>

          <v-card
            class="mx-auto"
            max-width="200"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-1" style="text-align:center; white-space: normal">
                  Profile
                </div>
                <div class="overline mb-1" style="text-align:center; white-space: normal">
                  Settings
                </div>
                <v-divider></v-divider>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions style="justify-content: center">
              <v-btn
                outlined
                rounded
                text
              >
                Log Out
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer" dark app
      :overlay-opacity="100"
      mobile-break-point="960"
      :expand-on-hover="expandOnHover"
      :style="{'width': expandOnHover ? '90px' : '260px'}"
      width="260"
    >
      <v-img
        class="img-contain-drawer"
        aspect-ratio="2"
        :src="require('@/assets/images/' + $store.state.imgSrc)"  
        height="100%"
        gradient="to bottom, rgba(0,0,0,.6), rgba(0,0,0,.7)">

        <v-list-item class="pady-15">
          <v-list-item-action>
            <v-icon>mdi-vuejs</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="title-drawer">Vue Js</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item style="padding: 15px 5px">

          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>John Leider</v-list-item-title>

        </v-list-item>

        <v-divider></v-divider>
        {{$store.state.colour}}
        <v-list-item v-for="link in $store.state.links" :key="link.title" router :to="link.route" @click="$store.dispatch('CLICK_LINK', link.route); clickLink()" class="mt-7" style="border-radius: .25rem; color: #FFF !important;" :style="link.isFocused && $store.state.styleFocused">       
          <v-list-item-action >
            <v-icon class="icon-navbar">{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{link.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-img>
    </v-navigation-drawer>


  </nav>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('CLICK_LINK', this.$router.currentRoute.path)
    this.nameTitle = this.$router.currentRoute.name
  },
  data() {
    return {
      drawer: true,
      expandOnHover: false,
      nameTitle: null,
    }
  },
  methods: {
    clickLink(){
      this.nameTitle = this.$router.currentRoute.name
    },
  },
}
</script>

<style>
.v-navigation-drawer .v-navigation-drawer__content{
  background-color: rgba(0,0,0,0.5)
}
.img-contain-drawer .v-responsive__content{
  padding: 0 20px;
}
.v-toolbar__content, .v-toolbar__extension{
  padding: 4px 40px !important;
}
.v-navigation-drawer--is-mouseover{
  width: 260px !important;
}
.v-application--is-ltr .v-list-item__action:first-child, .v-application--is-ltr .v-list-item__icon:first-child{
  margin-right: 20px !important;
}
.v-list-item--link:before{
  background-color: transparent !important
}
</style>

<style scoped>
.title-drawer{
  text-transform: uppercase;
  font-size: 18px !important;
}
.btn-app-bar{
  width: 45px !important;
  height: 45px !important;
  box-shadow: 0 2px 2px 0 rgb(153 153 153 / 14%), 0 3px 1px -2px rgb(153 153 153 / 20%), 0 1px 5px 0 rgb(153 153 153 / 12%) !important;
}
.btn-app-bar:focus::before{
  opacity: 0 !important;
}
.btn-app-bar .v-icon{
  font-size: 1.3rem !important;
}
.pady-15{
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>