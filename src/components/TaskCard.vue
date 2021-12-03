<template>
    <v-container class="pa-4">
          <h3 class="font-weight-light text-body-2 text-center">2 out of {{tasks.length}} tasks completed</h3>
          <div class="d-flex flex-column">
            <v-card class="px-4 py-3 d-block mx-auto mt-3 text-center" width="280px" v-for="(task,index) in tasks" :key="index">
              <v-checkbox :label="task" class="ma-0"></v-checkbox>
              <v-btn class="font-weight-light text-capitalize">Change</v-btn>
              <v-btn class="ml-4 font-weight-light red white--text text-capitalize" @click="deleteTask(index)">Delete</v-btn>
            </v-card>
          </div>
    </v-container>
</template>

<script>
export default({
    name: 'TaskCard',
    props:{
        tasks: [],
    },
    methods: {
        deleteTask(index){
            this.tasks.splice(index, 1);
        }
    }
})
</script>
