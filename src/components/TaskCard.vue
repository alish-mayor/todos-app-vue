<template>
        <v-card class="px-4 py-3 d-block mx-auto mt-3 text-center" width="280px">
            <v-checkbox :label="taskText" class="ma-0" v-model="checked" @click="checkCompleted($event, index)"></v-checkbox>
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
        checked: Boolean,
    },
    data () {
        return {
        }
    },
    methods: {
        deleteTask(index){
            this.$store.commit('deleteTask', index);
            if(this.checked) this.$store.commit('decrease', index);
        },
        checkCompleted(e, index){
            if(this.checked) this.$store.commit('increase', index); 
            else this.$store.commit('decrease', index);
        }
    }
})
</script>
