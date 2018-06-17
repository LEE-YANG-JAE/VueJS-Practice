<template>
    <div>
        <BaseInput v-model="searchText"></BaseInput>
        <BaseButton @click="search">
            <BaseIcon name="search"></BaseIcon>
        </BaseButton>
    </div>
</template>

<script>
// http://localhost:3000/20180616/2_ComponentRegistration/4_Module_Systems/2_AutomaticGlobalRegistration_of_BaseComponents

import BaseButton from "~/components/20180616/2_ComponentRegistration/4_Module_Systems/2_AutomaticGlobalRegistration_of_BaseComponents/BaseButton";
import BaseIcon from "~/components/20180616/2_ComponentRegistration/4_Module_Systems/2_AutomaticGlobalRegistration_of_BaseComponents/BaseIcon";
import BaseInput from "~/components/20180616/2_ComponentRegistration/4_Module_Systems/2_AutomaticGlobalRegistration_of_BaseComponents/BaseInput";

export default {
    components : {
        BaseButton, BaseIcon, BaseInput
    },
    data () {
        return {
            searchText : "text"
        }
    },
    methods : {
        search : function(msg) {
            alert(msg);
        }
    }
}
</script>

<style>

</style>