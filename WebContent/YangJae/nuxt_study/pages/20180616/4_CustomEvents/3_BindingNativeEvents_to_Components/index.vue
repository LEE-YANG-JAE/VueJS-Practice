<template>
    <div>
        <base-input v-on:focus.native="onFocus"></base-input>
    </div>
</template>

<script>
// http://localhost:3000/20180616/4_CustomEvents/3_BindingNativeEvents_to_Components

import BaseInput from "~/components/20180616/4_CustomEvents/3_BindingNativeEvents_to_Components/BaseInput"; 

export default {
    components : {
        BaseInput
    },
    data () {
        return {
            onFocus : "Here"
        }
    }
}
</script>

<style>

</style>