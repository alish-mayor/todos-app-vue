<template>
        <v-card class="px-4 py-3 d-block mx-auto mt-3 text-center" width="280px">
            <v-checkbox :label="taskText" class="ma-0" v-model="checked" @click="checkCompleted($event)"></v-checkbox>
            <v-btn class="font-weight-light text-capitalize">Change</v-btn>
            <v-btn class="ml-4 font-weight-light red white--text text-capitalize" @click="deleteTask(index)">Delete</v-btn>
        </v-card>
</template>

<script>
export default({
    name: 'TaskCard',
    props:{
        taskText: String,
        index: Number,
    },
    data () {
        return {
            checked: false,
        }
    },
    methods: {
        deleteTask(index){
            this.$store.commit('deleteTask', index)
        },
        checkCompleted(e){
            if(this.checked) this.$store.commit('increase'); 
            else this.$store.commit('decrease');
        }

    }
})
</script>
