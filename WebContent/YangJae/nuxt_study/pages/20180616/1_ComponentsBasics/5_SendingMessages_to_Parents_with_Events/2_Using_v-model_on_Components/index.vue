<template>
    <div>
        <!-- 
            <custom-input
            v-bind:value="searchText"
            v-on:input="searchText = $event"
            ></custom-input>

            <custom-input v-model="searchText"></custom-input>
        -->
        without lazy 
        <custom-input v-model="searchText"></custom-input>
        <hr>
        <br>
        with lazy
        <custom-input v-model.lazy="searchText"></custom-input> <!-- lazy doesn't work with v-model and component -->
        <hr>
        <br>
        <p>Root's text => {{ searchText }}</p>
        without lazy <input v-model="searchText">
        <hr>
        <br>
        with lazy <input v-model.lazy="searchText">
    </div>
    <!-- https://vuejs.org/v2/guide/components.html#Using-v-model-on-Components -->
</template>

<script>
// http://localhost:3000/20180616/1_ComponentsBasics/5_SendingMessages_to_Parents_with_Events/2_Using_v-model_on_Components

import CustomInput from "~/components/20180616/1_ComponentsBasics/5_SendingMessages_to_Parents_with_Events/2_Using_v-model_on_Components/CustomInput"

export default {
    components : {
        CustomInput
    },
    data () {
        return {
            searchText : "test"
        }
    }
}
</script>
