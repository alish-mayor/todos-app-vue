<template>
  <v-app>
    <v-main>
      <v-container>
        <h2 class="text-center text-h4 grey--text text--darken-3">Todos app</h2>
        <v-container class="d-flex align-center justify-center mt-2">
          <input type="text" placeholder="enter your task..." class="app-input pa-3 grey lighten-4 rounded rounded-r-0">
          <input type="button" value="submit" class="pa-3 green white--text rounded rounded-l-0">
        </v-container>
        <v-container class="pa-4">
          <h3 class="font-weight-light text-body-2 text-center">2 out of 3 tasks completed</h3>
          <div class="d-flex flex-column">
            <v-card class="px-4 py-3 d-block mx-auto mt-3 text-center" width="280px">
              <v-checkbox label="Do homework" class="ma-0"></v-checkbox>
              <v-btn class="font-weight-light text-capitalize">Change</v-btn>
              <v-btn class="ml-4 font-weight-light red white--text text-capitalize">Delete</v-btn>
            </v-card>
          </div>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {
    
  },

  data: () => ({
    //
  }),
});
</script>

<style>

</style>
