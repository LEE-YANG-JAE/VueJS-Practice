<template>
    <div>
        <!-- By default, v-model on a component uses 'value' as the prop and 'input' as the event -->
        <input
            type="checkbox"
            v-bind:checked="checked"
            v-on:change="$emit('change', $event.target.checked)"
        >
        <!-- the value of lovingVue will be passed to the checked prop. 
            The lovingVue property will then be updated 
            when <base-checkbox> emits a change event with a new value. -->
    </div>
</template>

<script>
export default {
    model : {
        prop : "checked",
        event : "change"
    },
    props : {
        checked : Boolean
    },
    data (){
        return {
            
        }
    }

}

</script>

<style>

</style>

