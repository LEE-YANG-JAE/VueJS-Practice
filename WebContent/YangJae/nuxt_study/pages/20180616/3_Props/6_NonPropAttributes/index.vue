<template>
    <div>
        <bootstrap-date-input
            data-date-picker="activated"
            class="date-picker-theme-dark"
        ></bootstrap-date-input>
    </div>
</template>

<script>
// http://localhost:3000/20180616/3_Props/6_NonPropAttributes

import BootstrapDateInput from "~/components/20180616/3_Props/6_NonPropAttributes/BootstrapDateInput"; 

export default {
    components : {
        BootstrapDateInput
    },
    data () {
        return {
            activated : true
        }
    }
}
</script>

<style>
.date-picker-theme-dark {
    background-color: black;
    color : white;
}
</style>