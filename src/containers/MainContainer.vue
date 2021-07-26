<template>
  <div class="fill-height">
    <Navbar/>

    <v-content style="background-color: rgba(0,0,0, .01); height: 100%;">
      <v-container fluid>
        <v-row stlyle="height: 100% !important">
          <v-col cols="12" style="padding: 0px 12px">
            <transition name="fade" mode="out-in">
              <keep-alive>
                <router-view/>
              </keep-alive>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-menu
      offset-x
      transition="slide-y-transition"
      :open-on-hover="false"
      :close-on-content-click="false"
      class="boder-r">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          color="black"
          fab
          dark
          bottom
          right
          absolute>
          <v-icon>settings</v-icon>
        </v-btn>
      </template>

      <v-card
        class="mx-auto"
        max-width="400"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <v-color-picker
              dot-size="25"
              v-model="$store.state.styleFocused['background-color']"
              swatches-max-height="200"
              hide-inputs
            ></v-color-picker>
            <v-divider></v-divider>
          </v-list-item-content>
        </v-list-item>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="d-flex justify-center align-center flex-row">
              <v-card 
                class="mx-auto"
                max-width="80"
                height="100"
                v-for="(img, index) in $store.state.listImages"
                :key="index"
                @click="$store.dispatch('CLICK_IMG', img)">
                  <v-img :style="img.isFocused && styledFocusImg" height="100" :src="require('@/assets/images/' + img.src)"></v-img>
              </v-card>
            </div>
            <v-divider></v-divider>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-menu>

    <v-snackbar id="snackbar" v-model="$store.state.toast.isActive" :timeout="3000" :top="true" :right="true" :multi-line="true" >
      <v-alert
        dense
        outlined
        :type="$store.state.toast.type"
      >
        {{$store.state.toast.msgToast}}
      </v-alert>
    </v-snackbar>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  components:{
    Navbar
  },
  data() {
    return {
      styledFocusImg: {
        'border': '3px solid #18D9DF'
      }
    }
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.v-main__wrap{
  padding: 3rem;
}
.v-btn--fab.v-size--default.v-btn--absolute.v-btn--bottom{
  bottom: 15px;
}
.v-snack__wrapper{
  background: transparent !important;
  box-shadow: none !important
}
#snackbar .v-alert--outlined{
  background-color: #FFF !important;
}
.v-alert{
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  padding: 16px !important;
}
.theme--dark.v-btn.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined){
  background-color: rgba(0,0,0,.2) !important;
}
.theme--dark.v-btn.v-btn--disabled{
  color: #FFF !important;
}
.v-data-table-header{
  font-size: 12px;
  font-family: Poppins,sans-serif;
  font-weight: 700;
  text-transform: uppercase;
}
.uppercase .v-text-field__slot{
  font-size: 12px;
  font-family: Poppins,sans-serif;
  font-weight: 500;
  text-transform: uppercase;
}
.v-text-field__slot{
  font-size: 12px;
  font-family: Poppins,sans-serif;
  font-weight: 500;
}
tbody{
  font-size: 14px;
  font-family: Poppins,sans-serif;
  font-weight: 400;
}
</style>