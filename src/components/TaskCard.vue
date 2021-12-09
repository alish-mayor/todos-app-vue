<template>
        <v-card class="px-4 py-3 d-block mx-auto mt-3 text-center" width="280px" :class="darker">
            <v-checkbox :label="taskText" class="mb-2 mt-0" v-model="checked" @click="checkCompleted($event, index)"></v-checkbox>
            <v-btn class="font-weight-light text-capitalize" @click="overlay = !overlay">Change</v-btn>
            <v-btn class="ml-4 font-weight-light red white--text text-capitalize" @click="deleteTask(index)">Delete</v-btn>
            <v-overlay absolute :value="overlay">
                <input type="text" class="grey lighten-3 px-2 py-1 rounded d-block mb-2" placeholder="change task..." v-model="newText" @keydown.enter="changeTask(index)">
                <v-btn color="success" @click="changeTask(index)" class="text-capitalize font-weight-light">Submit</v-btn>
            </v-overlay>
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
            overlay: false,
            newText: '',
        }
    },
    methods: {
        deleteTask(index){
            this.$store.commit('deleteTask', index);
            if(this.checked) this.$store.commit('decrease');
        },
        checkCompleted(e, index){
            if(this.checked) this.$store.commit('increase', index); 
            else this.$store.commit('decrease', index);
        },
        changeTask(index){
            this.$store.commit('changeTask', 
            {
                index: index,
                taskText: this.newText,
            });
            this.overlay = false;
            this.newText = '';
        }
    },
    computed : {
        darker(){
            return this.checked ? 'grey lighten-3' : ' ';
        },
    }
})
</script>
