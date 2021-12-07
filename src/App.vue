<template>
  <v-app>
    <v-main>
      <v-container>
        <h2 class="text-center text-h4 grey--text text--darken-3">Todos app</h2>
        <v-container class="d-flex align-center justify-center mt-2">
          <input type="text" placeholder="enter your task..." class="app-input pa-3 grey lighten-4 rounded rounded-r-0" v-model="taskText" @keydown.enter="addTask">
          <input type="button" value="Submit" class="pa-3 green white--text rounded rounded-l-0" @click="addTask">
        </v-container>
        <v-container class="pa-4">
          <h3 class="font-weight-light text-body-2 text-center">{{ countCompleted }} out of {{tasks.length}} tasks completed</h3>
          <div class="d-flex flex-column">
            <task-card v-for="(task,index) in tasks" :key="index" :index="index" :taskText="task.taskText" :checked="task.checked"></task-card>
          </div>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue";
import taskCard from './components/TaskCard.vue';
import store from './store/index.js';

export default Vue.extend({
  name: "App",

  components: {
    taskCard
  },
  store,
  data: () => ({
    taskText: '',
  }),
  methods: {
    addTask(){
      this.$store.commit('addTask', 
      {
        taskText: this.taskText,
        checked: false,
      })
      this.taskText = '';
    }
  },
  computed: {
    tasks(){
      return this.$store.state.tasks;
    },
    countCompleted(){
      return this.$store.state.countCompleted;
    }
  }
});
</script>

<style>

</style>
