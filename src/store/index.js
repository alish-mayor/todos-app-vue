import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

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
    increase(state, index){
      state.countCompleted++;
      if(!state.tasks[index]) return;
      state.tasks[index].checked = true;
    },
    decrease(state, index){
      state.countCompleted--;
      if(!state.tasks[index]) return;
      state.tasks[index].checked = false;
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()]
});
