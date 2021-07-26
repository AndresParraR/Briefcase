<template>
  <v-slide-group active-class="success" show-arrows center-active style="height: 100%">
    <v-slide-item v-for="n in 6" :key="n" style="margin: 0px 25px">
      <CapacityGraph style="display:flex; justify-content: center; align-items: center;" :style="{'min-width': (widthSlide/4 < 300) ? widthSlide-52 + 'px !important' : widthSlide/4-52 + 'px !important', 'max-width': (widthSlide/4 < 300) ? widthSlide-52 + 'px !important' : widthSlide/4-52 + 'px !important'}"/>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
import CapacityGraph from './CapacityGraph'

export default {
  components:{
    CapacityGraph
  },
  mounted() {
    var vm = this
    setTimeout(function(){
      var containSlide = document.getElementsByClassName("v-slide-group__wrapper")
      vm.widthSlide = containSlide[0].offsetWidth
    }, 100)
  },
  data() {
    return {
      widthSlide: null,
    }
  },
}
</script>