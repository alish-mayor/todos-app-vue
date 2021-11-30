<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <h1 class="title">Tasks to do</h1>
        <button class="plus-btn">+</button>
      </div>
      <div class="add-task">
        <input type="text" class="add-task__input">
        <button class="add-task__btn">Submit</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";


export default Vue.extend({
  name: "App",
  components: {
    
  },
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
  
}

body{
  background: #e7e7e7;
  display: flex;
  justify-content: center;
  align-items: top;
  min-height: 100vh;
  
}

.container{
  background: #ffffff;
  min-width: 30rem;
  padding: 1rem;
  border-radius: 0.5rem;
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

</style>
