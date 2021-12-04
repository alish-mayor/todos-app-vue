import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    countCompleted: 0,
  },
  mutations: {
    addTask(state, task){
      state.tasks.push({
        taskText: task.taskText,
        checked: task.checked
      })
    },
    deleteTask(state, index){
      state.tasks.splice(index, 1);
    },
    increase(state){
      state.countCompleted++;
    },
    decrease(state){
      state.countCompleted--;
    }
  },
  actions: {},
  modules: {},
});
