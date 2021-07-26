<template>
  <v-slide-group id="slideGraph" active-class="success" show-arrows center-active style="height: 100%">
    <v-slide-item v-for="n in 5" :key="n" style="margin: 0px 25px">
      <GraphStatistics style="display:flex; justify-content: center; align-items: center;" :style="{'min-width': (widthSlide/3 < 300) ? widthSlide-50 + 'px !important' : widthSlide/3-50 + 'px !important', 'max-width': (widthSlide/3 < 300) ? widthSlide-50 + 'px !important' : widthSlide/3-50 + 'px !important'}"/>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
import GraphStatistics from './GraphStatistics'

export default {
  components:{
    GraphStatistics
  },
  mounted() {
    var vm = this
    setTimeout(function(){
      var containSlide = document.getElementById("slideGraph")
      vm.widthSlide = containSlide.children[1].offsetWidth
    }, 200)
  },
  data() {
    return {
      headquartersLocal: [],
      render: false,
      widthSlide: null,
    }
  },
}
</script>