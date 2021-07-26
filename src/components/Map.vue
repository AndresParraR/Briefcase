<template>
  <l-map style="height: 100%" :zoom="zoom" :center="currentCenter">
    <l-tile-layer :url="url"></l-tile-layer>
    <l-marker :lat-lng="markerLatLng" ></l-marker>
  </l-map>
</template>

<script>
// import { mapState } from 'vuex'
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';
import { latLng } from "leaflet";
import { coordinatesBus } from '../main'

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  created() {
    coordinatesBus.$on('coordinatesChanged', () =>{
      console.log('Test')
      this.markerLatLng = this.$store.state.marker
      this.currentCenter = this.$store.state.center
    })
  },
  updated() {
    console.log('Updated Map')
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 18,
      currentCenter: latLng(47.3131387, -1.319423),
      markerLatLng: latLng(47.3131387, -1.319423)
    };
  },
}
</script>