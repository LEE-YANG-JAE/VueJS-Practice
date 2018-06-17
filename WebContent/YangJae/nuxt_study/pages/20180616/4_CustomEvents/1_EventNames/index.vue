<template>
    <div>
       <my-component v-on:myEvent="doSomething"></my-component>
    </div>
    <!-- https://vuejs.org/v2/guide/components-custom-events.html#Event-Names -->
</template>

<script>
// http://localhost:3000/20180616/4_CustomEvents/1_EventNames

import MyComponent from "~/components/20180616/4_CustomEvents/1_EventNames/MyComponent"; 

export default {
    components : {
        MyComponent
    },
    data () {
        return {

        }
    },
    methods : {
        doSomething () {
            alert("Good Job");
        }
    }
}
</script>

<style>
.username-input{
    height : 20px;
}
</style>