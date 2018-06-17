<template>
    <button v-on:click="count++">
        You clicked me {{ count }} times.
    </button>
</template>

<script>
// a component’s data option must be a function, so that each instance can maintain an independent copy of the returned data object:
export default {
    data () {
        return {
            count : 0
        }
    }
    // ES5 Style
    /*
    data : function() {
        return {
            count : 0
        }
    }
    */
}
</script>