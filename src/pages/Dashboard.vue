<template>
  <div style="width: 98%; margin: auto">
    <v-card class="card-dashboard">
      <SliderCapacity />
    </v-card>
    <v-card class="mt-10 card-dashboard">
      <SliderGraphs />
    </v-card>
  </div>
</template>

<script>
import SliderCapacity from "../components/SliderCapacity";
import SliderGraphs from "../components/SliderGraphs";

export default {
  components: {
    SliderCapacity,
    SliderGraphs,
  },
};
</script>

<style>
.card-dashboard{
  background-color: transparent !important;
  box-shadow: none !important;
}
</style>