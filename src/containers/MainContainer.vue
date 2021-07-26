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
      content-class="menu-settings">
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
.menu-settings{
  z-index: 1000 !important;
}
</style>