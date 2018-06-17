<template>
    <div>
       <base-input
            v-model="username"
            class="username-input"
            placeholder="Enter your username"
            v-bind:label="test"
        ></base-input>
    </div>
</template>

<script>
// http://localhost:3000/20180616/3_Props/7_DisablingAttributeInheritance

import BaseInput from "~/components/20180616/3_Props/7_DisablingAttributeInheritance/BaseInput"; 

export default {
    components : {
        BaseInput
    },
    data () {
        return {
            username : "yang",
            test : "TTEESSTT"
        }
    }
}
</script>

<style>
.username-input{
    height : 20px;
}
</style>