<template>
  <v-app>
    <v-main>
      <v-container>
        <h2 class="text-center text-h4 grey--text text--darken-3">Todos app</h2>
        <v-container class="d-flex align-center justify-center mt-2">
          <input type="text" placeholder="enter your task..." class="app-input pa-3 grey lighten-4 rounded rounded-r-0" v-model="taskText" @keydown.enter="addTask">
          <input type="button" value="submit" class="pa-3 green white--text rounded rounded-l-0" @click="addTask">
        </v-container>
        <task-card :tasks="tasks"></task-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import taskCard from './components/TaskCard.vue';

export default Vue.extend({
  name: "App",

  components: {
    taskCard
  },

  data: () => ({
    tasks: ['do homework', 'cook dinner', 'set property'],
    taskText: '',
  }),
  methods: {
    addTask(){
      this.tasks.push(this.taskText);
      this.taskText = '';
    }
  }
});
</script>

<style>

</style>
