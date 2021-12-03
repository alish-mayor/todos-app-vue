<template>
        <v-card class="px-4 py-3 d-block mx-auto mt-3 text-center" width="280px">
            <v-checkbox :label="taskText" class="ma-0" v-model="checked"></v-checkbox>
            <v-btn class="font-weight-light text-capitalize">Change</v-btn>
            <v-btn class="ml-4 font-weight-light red white--text text-capitalize" @click="deleteTask(index)">Delete</v-btn>
        </v-card>
</template>

<script>
export default({
    name: 'TaskCard',
    props:{
        taskText: String,
        
    },
    data () {
        return {
            checked: false,
        }
    },
    methods: {
        deleteTask(index){
            this.tasks.splice(index, 1);
        },
    },
})
</script>
