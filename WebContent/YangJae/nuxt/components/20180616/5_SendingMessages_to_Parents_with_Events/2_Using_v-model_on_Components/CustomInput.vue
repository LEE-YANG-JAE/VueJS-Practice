<template>
    <div>
       <input
            v-bind:value="value"
            v-on:input="$emit('input', $event.target.value +'!')"
        >
       <p>component's text => {{ value }}</p> 
    </div>
</template>

<script>
export default {
    props : [ "value"]
}
</script>

<style>

</style>

