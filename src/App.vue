<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <h1 class="title">Tasks to do</h1>
        <button class="btn btn_add" @click="openInput">+</button>
      </div>
      <div class="add-task" v-if="showInput">
        <input type="text" class="add-task__input">
        <button class="btn btn_submit" @click="addTask">Submit</button>
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
      showInput: false,
    }
  },
  components: {
    
  },
  methods: {
    openInput(){
      this.showInput = true;
    },
    addTask(){
      this.showInput = false;
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
  /* border: 1px solid #000000; */
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


</style>
