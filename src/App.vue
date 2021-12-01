<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <h1 class="title">Tasks to do</h1>
        <button class="btn btn_add" @click="openInput">+</button>
      </div>
      <div class="add-task" v-if="showInput">
        <input type="text" class="add-task__input" v-model="taskText">
        <button class="btn btn_submit" @click="addTask">Submit</button>
      </div>
      <div class="tasks-container">
        <div class="task-card" :class="done" v-for="(task,index) in tasks" :key="index" @click="doneTask">
          <div class="task-card__content">
              <h2 class="task-card__text">{{ task }}</h2>
              <div class="task-card__actions">
                <button class="btn btn_change">✎</button>
                <button class="btn btn_delete" @click="deleteTask(index)">X</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";


export default Vue.extend({
  name: "App",
  data() {
    return {
      tasks: [],
      showInput: false,
      taskText: '',
      index: 0,
      isDone: false,
    }
  },
  components: {
    
  },
  methods: {
    openInput(){
      this.showInput = true;
    },
    addTask(){
      this.tasks.push(this.taskText);
      this.showInput = false;
      this.taskText = ''
    }, 
    deleteTask(){
      this.tasks.splice(this.index, 1);
    },
    doneTask(){
      this.isDone = !this.isDone;
    }
  },
  computed: {
    done(){
      return this.isDone ? 'done' : '' 
    }
  }
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*, *::after, *::before{
  box-sizing: border-box;
}

:root{
  font-size: 10px;
  --app-border-radius: 5px;
}

body{
  background: #e7e7e7;
  display: flex;
  justify-content: center;
  align-items: top;
  min-height: 100vh;
}

.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container{
  background: #ffffff;
  min-width: 30rem;
  padding: 1.5rem;
  border-radius: var(--app-border-radius);
}

.title{
  display: inline-block;
  font-weight: 400;
}

.add-task{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.add-task__input{
  padding: 0.5rem;
  border-radius: var(--app-border-radius);
  border: none;
  background: #f1f1f1;
  font-size: 1.5rem;
}

.btn {
  border: none;
  color: #ffffff;
  padding: 0.7rem 1rem;
  border-radius: var(--app-border-radius);
  cursor: pointer;
  font-family: inherit;
}

.btn_add{
  background: #6add5b;
}

.btn_submit {
  background: #3f89b4;
}

.btn_change, .btn_delete{
  color: #363636;
}

.btn_delete{
  margin-left: 1rem;
}

.task-card {
  padding: 0.5rem 0.2rem;
  border-bottom: 1px solid #bbbbbb;
}

.task-card.done {
  color: #b8b8b8;
}

.task-card.done h2{
  text-decoration: line-through;
}

.task-card__content{
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.task-card__text{
  font-weight: 400;
}

</style>
