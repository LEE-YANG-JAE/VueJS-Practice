<template>
    <div>
        <button v-on:click="tryEmit">Hello</button>
    </div>
</template>

<script>


export default {
    data (){
        return {
            
        }
    },
    methods : {
        tryEmit () {
            this.$emit('myEvent');
        }
    }
}

</script>

<style>

</style>

