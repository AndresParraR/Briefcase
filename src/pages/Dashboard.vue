<template>
  <div style="width: 98%; margin: auto">
    <v-card class="card card-map">
      <Map/>
    </v-card>
    <v-card class="mt-10 card d-flex justify-center">
      <div class="mx-10" style="display: inline-grid; text-align:center;" v-for="(n, index) in $store.state.someValues" :key="index">
        <v-progress-circular
          :rotate="270"
          :size="120"
          :width="15"
          :value="n"
          color="primary"
          style="margin-bottom: 1em">
          {{n}}%
        </v-progress-circular>
        Some Value
      </div>
    </v-card>
  </div>
</template>

<script>
import Map from '../components/Map.vue'

export default {
  components: {
    Map
  },
};
</script>

<style>
.card{
  background-color: transparent !important;
  box-shadow: none !important;
}
.card-map{
  height: 85vh;
}
</style>