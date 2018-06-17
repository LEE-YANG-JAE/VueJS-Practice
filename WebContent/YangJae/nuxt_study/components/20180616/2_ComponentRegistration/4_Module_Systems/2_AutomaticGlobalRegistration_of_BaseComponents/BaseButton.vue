<template>
    <div>
        <button v-on:click="$emit('click','Hello')">Hi</button>
        <slot>Good</slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>

